import * as yup from 'yup';

const pageSchema = yup.object({
  title: yup
    .string()
    .required('El título es requerido'),

  content: yup
    .string()
    .required('La descripción es requerida')

});

export default pageSchema;
