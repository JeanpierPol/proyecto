import * as yup from 'yup';
import { image } from './rules';

const maxTitle = 30;
const maxDescription = 20000;

const storySchema = yup.object({
  title: yup
    .string()
    .required('El título es requerido')
    .max(maxTitle, `Debe tener como máximo ${maxTitle} caracteres`),

  description: yup
    .string()
    .required('La descripción es requerida')
    .max(maxDescription, `Debe tener como máximo ${maxDescription} caracteres`),

  coverImg: image,
  tag: yup
    .array()
    .min(1, 'Debes seleccionar al menos una etiqueta')
    .required('Las etiquetas son requeridas'),

});

export default storySchema;
