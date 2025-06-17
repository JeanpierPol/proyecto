import * as yup from 'yup';
import { email, password } from './rules';

const loginSchema = yup.object({
  email,
  password
});

export default loginSchema;
