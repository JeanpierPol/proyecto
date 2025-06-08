import { body, param, validationResult } from 'express-validator';
import mongoose from 'mongoose';

const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const createPageValidations  = [
    body('storyId')
        .notEmpty().withMessage('El ID de la historia es requerido')
        .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('Debe ser un ID válido de MongoDB'),

    body('parentPage')
        .optional()
        .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('parentPage debe ser un ID válido'),

    body('title')
        .notEmpty().withMessage('El título es requerido')
        .isString().withMessage('El título debe ser un texto'),

    body('content')
        .notEmpty().withMessage('El contenido es requerido')
        .isString().withMessage('El contenido debe ser texto'),

    validateResult,
];


export { createPageValidations  }