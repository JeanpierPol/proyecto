import { useForm } from 'react-hook-form';
import { InputText } from './input/InputText';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import loginSchema from '../../validations/loginSchema';
import { useAuth } from '../../context/AuthContext';

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const { signin } = useAuth();

    const inputs = [
        { name: 'email', label: 'Correo electrónico', type: 'email' },
        { name: 'password', label: 'Contraseña', type: 'password' }
    ];

    const onSubmit = (data) => {
        signin(data);
    };


    return (
        <div className="form container mt-5">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title mb-4 text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {inputs.map(input => (
                            <InputText
                                key={input.name}
                                type={input.type}
                                name={input.name}
                                label={input.label}
                                register={register}
                                error={errors[input.name]}
                                watchValue={watch}
                            />
                        ))}

                        <button className="btn btn-primary w-100" type="submit">Login</button>
                    </form>
                    <div>
                        <p>¿No tienes cuenta? <Link className='link-offset-2 link-underline link-underline-opacity-0' to="/register">Registrate</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
