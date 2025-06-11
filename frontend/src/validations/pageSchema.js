import * as yup from 'yup';

const pageSchema = yup.object({
  title: yup
    .string()
    .required('El título es requerido'),

  content: yup
    .string()
    .required('La descripción es requerida'),
  
  question: yup
    .string()
    .optional(),

  responses: yup
    .array().of(
    yup.object({
      text: yup.string().required('La respuesta es requerida'),
      nextPage: yup.string().required('La siguiente página es requerida'),
    })
  ).optional()
});

export default pageSchema;
