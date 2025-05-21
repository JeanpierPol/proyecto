import { body, param, validationResult } from 'express-validator';
import moment from 'moment';
const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const createUserValidations = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido')
        .isString().withMessage('El nombre debe ser texto'),

    body('lastName')
        .notEmpty().withMessage('El apellido es requerido')
        .isString().withMessage('El apellido debe ser texto'),
    
    body('birthDate')
        .notEmpty().withMessage('La fecha de nacimiento es requerida')
        .isISO8601().withMessage('La fecha debe tener un formato válido')
        .custom((value) => {
            const birth = moment(value);
            const now = moment();

            if (!birth.isValid()) {
                throw new Error('La fecha de nacimiento no es válida');
            }

            if (birth.isAfter(now)) {
                throw new Error('La fecha de nacimiento no puede estar en el futuro');
            }

            return true;
        }),

    body('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('Debe ser un email válido'),

    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isString().withMessage('La contraseña tiene que ser válida')
        .isLength({ min: 8 }).withMessage('La longitud de la contraseña debe ser mínima de 8 caracteres'),

    body('avatar')
        .optional()
        .isString().withMessage('Formato no valido'),

    body('rol')
        .optional()
        .isIn(['user', 'admin']).withMessage('El rol debe ser "user" o "admin"'),

    validateResult,
];

const editUserValidations = [
    param('id')
        .notEmpty().withMessage('El ID es requerido')
        .isMongoId().withMessage('Debe ser un ID de MongoDB válido'),

    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser texto'),

    body('email')
        .optional()
        .isEmail().withMessage('Debe ser un email válido'),

    body('password')
        .optional()
        .isString().withMessage('La contraseña debe ser válida')
        .isLength({ min: 6 }).withMessage('La longitud de la contraseña debe ser mínima de 6 caracteres'),

    body('avatar')
        .optional()
        .isString().withMessage('Formato no valido'),
    validateResult,
];

const getUserValidations = [
    param('id')
        .notEmpty().withMessage('El ID es requerido')
        .isMongoId().withMessage('Debe ser un ID de MongoDB válido'),

    validateResult,
];

export {
    createUserValidations,
    editUserValidations,
    getUserValidations,
};