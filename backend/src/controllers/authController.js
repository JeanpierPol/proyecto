import jwt from 'jsonwebtoken'
import config from '../../config.js';
import { registerUser, loginUser, editUser, getFullUserInfo } from '../service/userServices.js';
import { createUserValidations } from '../validations/userValidations.js';

const { SECRET_JWT_KEY } = config
const authController = {
  createUserController: [
    ...createUserValidations,
    async (req, response) => {
      try {
        const { name, lastName, birthDate, email, password, rol } = req.body;
        const avatarPath = req.file.path || null;
        const newUser = {
          name,
          lastName,
          birthDate,
          email,
          password,
          avatar: avatarPath,
          rol
        };

        await registerUser(newUser);
        response.status(201).json({ message: 'Usuario registrado exitosamente' });

      } catch (error) {
        response.status(400).json({ error: error?.message || error });
      }
    }
  ],

  loginUserController: [
    async (req, response) => {
      try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);

        const token = jwt.sign({ id: user._id, email: user.email, avatar: user.avatar, rol: user.rol }, SECRET_JWT_KEY, { expiresIn: "24h" });
        response
          .cookie('token', token, {
            httpOnly: false,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
          })
          .status(200)
          .json({ message: "Login exitoso" });
      } catch (error) {
        const status = error.statusCode || 500;
        response.status(status).json({ error: error.message });
      }
    }
  ],

  logoutUserController: [
    async (req, res) => {
      try {
        res.clearCookie('token', {
          httpOnly: false,
          secure: true,
          sameSite: 'none',
        });

        res.status(200).json({ message: 'Sesión cerrada exitosamente' });
      } catch (error) {
        console.error('Error en logout:', error);
        res.status(500).json({ error: 'Error al cerrar sesión' });
      }
    }
  ],

  verifyToken: [
    async (req, res) => {
      const { token } = req.cookies;

      if (!token) return res.send(false);

      jwt.verify(token, SECRET_JWT_KEY, async (error, user) => {
        console.log(user)

        if (error) return res.sendStatus(401);

        const userFound = await getFullUserInfo(user.id);

        if (!userFound) return res.sendStatus(401);

        res.json({
          id:userFound._id,
          name: userFound.name,
          lastName: userFound.lastName,
          birthDate: userFound.birthDate,
          email: userFound.email,
          avatar:userFound.avatar,
          rol: userFound.rol
        
        })

      })


    }
  ],

  getFullUserInfo: [
    async (req, res) => {
      try {
        const user = await getFullUserInfo(req.userId);
        res.status(200).json(user);
      } catch (error) {
        console.error("Error al obtener datos completos del usuario:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }
  ],


  editUserController: [
    async (req, res) => {
      try {
        const userId = req.userId;
        const { name, lastName } = req.body;
        const avatarPath = req.file ? `/uploads/${req.file.filename}` : null;

        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (lastName) updatedFields.lastName = lastName;
        if (avatarPath) updatedFields.avatar = avatarPath;

        const updatedUser = await editUser(userId, updatedFields);
        req.wsService.emitEvent("profile_edited", updatedUser);
        res.status(200).json({ message: "Perfil actualizado correctamente", user: updatedUser });
      } catch (error) {
        console.error("Error al editar perfil:", error);
        res.status(500).json({ error: "Error al editar perfil" });
      }
    }
  ],

}

export default authController;
