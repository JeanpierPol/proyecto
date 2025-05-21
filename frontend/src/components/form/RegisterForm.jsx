import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schemaValidations';

import { AvatarComponents } from '../AvatarComponents';
export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const validatedFeedback = (fieldName) => {
        const fieldValue = watch(fieldName);
        const error = errors[fieldName];
        return `form-control ${error ? 'is-invalid' : fieldValue ? 'is-valid' : ''}`;
    };

    const today = new Date().toISOString().split('T')[0];

    const [previewUrl, setPreviewUrl] = useState(null);
    const avatarFile = watch('avatar');

    useEffect(() => {
        if (avatarFile && avatarFile[0]) {
            const url = URL.createObjectURL(avatarFile[0]);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [avatarFile]);



    const onSubmit = (data) => console.log(data)

    return (
        <div className="form register container mt-5">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title mb-4 text-center">Registro</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={`${validatedFeedback('name')}`}
                                        id="name"
                                        name="name"
                                        placeholder="Nombre"
                                        {...register('name')}
                                    />
                                    <label htmlFor="nombre">Nombre</label>
                                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={`${validatedFeedback('lastName')}`}
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Apellido"
                                        {...register('lastName')}
                                    />
                                    <label htmlFor="lastName">Apellido</label>
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className={`${validatedFeedback('birthDate')}`}
                                id="birthDate"
                                name="birthDate"
                                placeholder="Fecha de nacimiento"
                                max={today}
                                {...register('birthDate')}
                            />
                            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                            {errors.birthDate && <div className="invalid-feedback">{errors.birthDate.message}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className={`${validatedFeedback('email')}`}
                                id="email"
                                name="email"
                                placeholder="Correo electrónico"
                                {...register('email')}
                            />
                            <label htmlFor="email">Correo electrónico</label>
                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className={`${validatedFeedback('password')}`}
                                id="password"
                                name="password"
                                placeholder="Contraseña"
                                {...register('password')}
                            />
                            <label htmlFor="password">Contraseña</label>
                            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className={`${validatedFeedback('confirmedPassword')}`}
                                id="confirmedPassword"
                                name="confirmedPassword"
                                placeholder="confirmar contraseña"
                                {...register('confirmedPassword')}
                            />
                            <label htmlFor="confirmedPassword">Confirmar contraseña</label>
                            {errors.confirmedPassword && <div className="invalid-feedback">{errors.confirmedPassword.message}</div>}

                        </div>



                        <div className="mb-3">
                            <div className="text-center">
                                <AvatarComponents height="150" src={previewUrl} />
                            </div>
                            <label htmlFor="avatar" className="form-label">Avatar</label>
                            <input
                                type="file"
                                className={`${validatedFeedback('avatar')}`}
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                {...register('avatar')}
                            />
                            {errors.avatar && <div className="invalid-feedback">{errors.avatar.message}</div>}

                        </div>

                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${errors.privacy ? 'is-invalid' : ''}`}
                                    type="checkbox"
                                    id="privacy"
                                    {...register('privacy')}
                                />
                                <label className="form-check-label" htmlFor="privacy">
                                    Términos y condiciones
                                </label>
                                {errors.privacy && <div className="invalid-feedback">{errors.privacy.message}</div>}

                            </div>
                        </div>

                        <button className="btn btn-primary w-100" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}