import * as yup from 'yup';

const minName = 3;
const maxName = 50;

export const name = yup
  .string()
  .required('El nombre es obligatorio')
  .min(minName, `El nombre debe tener al menos ${minName} caracteres`)
  .max(maxName, `El nombre debe tener como máximo ${maxName} caracteres`);

export const lastName = yup
  .string()
  .optional()
  .min(minName, `El apellido debe tener al menos ${minName} caracteres`)
  .max(maxName, `El apellido debe tener como máximo ${maxName} caracteres`);

export const birthDate = yup
  .date()
  .transform((value, originalValue) => (originalValue === '' ? null : value))
  .nullable()
  .required('La fecha de nacimiento es obligatoria')
  .max(new Date(), 'La fecha no puede ser futura');

export const email = yup
  .string()
  .required('El email es obligatorio')
  .email('El email no es válido');

export const password = yup
  .string()
  .required('La contraseña es obligatoria')
  .min(8, 'Mínimo 8 caracteres')
  .max(20, 'Máximo 20 caracteres')
  .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
  .matches(/[a-z]/, 'Debe contener al menos una minúscula')
  .matches(/[0-9]/, 'Debe contener al menos un número')
  .matches(/[^A-Za-z0-9]/, 'Debe contener al menos un carácter especial');

export const avatar = yup
  .mixed()
  .nullable()
  .notRequired()
  .test('fileFormat', 'Debe ser una imagen válida', (file) => {
    if (!file || file.length === 0) return true;
    return ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file[0]?.type);
  })
  .test('fileSize', 'Máximo 5MB', (file) => {
    if (!file || file.length === 0) return true;
    return file[0]?.size <= 5 * 1024 * 1024;
  });

