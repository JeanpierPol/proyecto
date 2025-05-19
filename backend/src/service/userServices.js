import User from '../models/User.js';
import CRUDServices from './CRUDService.js';
import { HttpError } from '../utils/errors.js';


const userService = new CRUDServices(User, 'User');

const registerUser = (data) => userService.insertData(data);

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new HttpError("El email no existe", 401)
        }

        const validationPassword = await user.comparePassword(password);
        if (!validationPassword) {
            throw new HttpError("Contraseña inválida", 401);
        }

        return user;
    } catch (error) {
        throw error;
    }
}
const editUser = async (userId, updatedFields) => userService.editData(userId, updatedFields)

const getFullUserInfo = async (id) => userService.getDataByIdOnly(id);

export { registerUser, loginUser, editUser, getFullUserInfo };
