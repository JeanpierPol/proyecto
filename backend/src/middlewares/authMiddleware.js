import jwt from 'jsonwebtoken';
import config from '../../config.js';

const { SECRET_JWT_KEY } = config;

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ mensaje: 'No hay token de autenticación' });
        }

        const decoded = jwt.verify(token, SECRET_JWT_KEY);
        req.userId = decoded.id;
        req.rol = decoded.rol;
        req.email = decoded.email;
        req.avatar = decoded.avatar;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ mensaje: 'Token expirado' });
        }
        res.status(401).json({ mensaje: 'Token inválido' });
    }
};

export default authMiddleware;
