import React, { useState, useEffect, use } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schemaValidations';

import { AlertSuccess } from '../alert/AlertSuccess ';
import { AlertWarning } from '../alert/AlertWarning';

import { AvatarComponents } from '../AvatarComponents';
import { FormComponent } from './FormComponent';

import { registerRequest } from '../../api/auth';

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(schema)
    });

    const today = new Date().toISOString().split('T')[0];
    const [previewUrl, setPreviewUrl] = useState(null);
    const avatarFile = watch('avatar');
    const [feedback, setFeedback] = useState(null);

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
        setFeedback(null);
        const { name, lastName, birthDate, avatar, email, password } = data;
        let newData = {
            name,
            lastName,
            birthDate,
            avatar: avatar[0],
            email,
            password
        };

        try {
            let request = await registerRequest(newData);
            setFeedback(<AlertSuccess text={request.data.message} />);
        } catch (error) {
            setFeedback(<AlertWarning text={error.response?.data?.error || 'Error al registrar'} />);
        }
    };



    return (
        <div className="form register container mt-5">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title mb-4 text-center">Registro</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {feedback && <div className="mb-3">{feedback}</div>}
                        <div className="row">
                            {inputs.slice(0, 2).map(input => (
                                <div key={input.name} className="col-md-6 mb-3">
                                    <FormComponent
                                        {...input}
                                        register={register}
                                        error={errors[input.name]}
                                        watchValue={watch}
                                    />
                                </div>
                            ))}
                        </div>

                        {inputs.slice(2).map(input => (
                            <FormComponent
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
                        <FormComponent
                            type="file"
                            name="avatar"
                            label="avatar"
                            register={register}
                            error={errors.avatar}
                            watchValue={watch}
                        />

                        <FormComponent
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
                </div>
            </div>
        </div>
    );
};
