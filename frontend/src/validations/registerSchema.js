import * as yup from 'yup';
import { name, lastName, birthDate, email, password, avatar } from './rules';

const registerSchema = yup.object({
    name,
    lastName,
    birthDate,
    email,
    password,

    confirmedPassword: yup
        .string()
        .required('Confirma tu contraseña')
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),

    avatar,

    privacy: yup
        .boolean()
        .oneOf([true], 'Debes aceptar los términos y condiciones')
        .required('Debes aceptar los términos')
});

export default registerSchema;
