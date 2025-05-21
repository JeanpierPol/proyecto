import * as yup from 'yup';

const minName = 3;
const maxName = 50;

const schema = yup.object({
    name: yup
        .string()
        .required('El nombre es obligatorio')
        .min(minName, `El nombre debe tener al menos ${minName} caracteres`)
        .max(maxName, `El nombre debe tener como máximo ${maxName} caracteres`),

    lastName: yup
        .string()
        .optional()
        .min(minName, `El apellido debe tener al menos ${minName} caracteres`)
        .max(maxName, `El apellido debe tener como máximo ${maxName} caracteres`),

    birthDate: yup
        .date()
        .required('La fecha de nacimiento es obligatoria')
        .max(new Date(), 'La fecha no puede ser futura'),

    email: yup
        .string()
        .required('El email es obligatorio')
        .email('El email no es válido'),

    password: yup
        .string()
        .required('La contraseña es obligatoria')
        .min(8, 'Mínimo 8 caracteres')
        .max(20, 'Máximo 20 caracteres')
        .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
        .matches(/[a-z]/, 'Debe contener al menos una minúscula')
        .matches(/[0-9]/, 'Debe contener al menos un número')
        .matches(/[^A-Za-z0-9]/, 'Debe contener al menos un carácter especial'),

    confirmedPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),

    avatar: yup
        .mixed()
        .nullable()
        .notRequired()
        .test('fileFormat', 'El archivo debe ser una imagen', (file) => {
            if (!file) return true;
            return ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'].includes(file.type);
        }),

    privacy: yup
        .boolean()
        .oneOf([true], 'Debes aceptar los términos y condiciones')
        .required('Debes aceptar los términos')
});

export default schema