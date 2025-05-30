import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from '../../validations/registerSchema';
import { Link } from 'react-router-dom';
import AvatarComponents from '../imagenComponent/AvatarComponents';
import { InputText, InputCheckbox, InputFile } from './input/index';
import { useAuth } from '../../context/AuthContext';

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const { signup } = useAuth();
    const [previewUrl, setPreviewUrl] = useState(null);
    const avatarFile = watch('avatar');
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        if (avatarFile && avatarFile[0]) {
            const url = URL.createObjectURL(avatarFile[0]);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [avatarFile]);

    const inputs = [
        { name: 'name', label: 'Nombre' },
        { name: 'lastName', label: 'Apellido' },
        { name: 'birthDate', label: 'Fecha de nacimiento', type: 'date', max: today },
        { name: 'email', label: 'Correo electrónico', type: 'email' },
        { name: 'password', label: 'Contraseña', type: 'password' },
        { name: 'confirmedPassword', label: 'Confirmar contraseña', type: 'password' }
    ];

    const onSubmit = async (data) => {
        const { name, lastName, birthDate, avatar, email, password } = data;
        let newData = {
            name,
            lastName,
            birthDate,
            avatar: avatar[0],
            email,
            password
        };

        signup(newData)
    };

    return (
        <div className="form register container mt-5">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title mb-4 text-center">Registro</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {inputs.slice(0, 2).map(input => (
                                <div key={input.name} className="col-md-6 mb-3">
                                    <InputText
                                        {...input}
                                        register={register}
                                        error={errors[input.name]}
                                        watchValue={watch}
                                    />
                                </div>
                            ))}
                        </div>

                        {inputs.slice(2).map(input => (
                            <InputText
                                key={input.name}
                                {...input}
                                register={register}
                                error={errors[input.name]}
                                watchValue={watch}
                            />
                        ))}

                        <div className="mb-3 text-center">
                            <AvatarComponents height="150" src={previewUrl} />
                        </div>
                        <InputFile
                            type="file"
                            name="avatar"
                            label="avatar"
                            register={register}
                            error={errors.avatar}
                            watchValue={watch}
                        />

                        <InputCheckbox
                            type="checkbox"
                            name="privacy"
                            label="Términos y condiciones"
                            register={register}
                            error={errors.privacy}
                            watchValue={watch}
                        />

                        <button className="btn btn-primary w-100" type="submit">
                            Enviar
                        </button>
                    </form>
                    <div>
                        <p>¿Tienes cuenta? <Link className='link-offset-2 link-underline link-underline-opacity-0' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
