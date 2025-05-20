import React, { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        email: '',
        password: '',
        avatar: null
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'avatar') {
            setFormData(prev => ({ ...prev, avatar: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log('Datos enviados:', formData);
        }

        setValidated(true);
    };

    return (
        <div className="form register container mt-5">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title mb-4 text-center">Registro</h2>

                    <form
                        className={`needs-validation ${validated ? 'was-validated' : ''}`}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="nombre">Nombre</label>
                                    <div className="invalid-feedback">Por favor ingresa tu nombre.</div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="apellido"
                                        name="apellido"
                                        placeholder="Apellido"
                                        value={formData.apellido}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="apellido">Apellido</label>
                                    <div className="invalid-feedback">Por favor ingresa tu apellido.</div>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                            <div className="invalid-feedback">Por favor ingresa tu fecha de nacimiento.</div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Correo electrónico</label>
                            <div className="invalid-feedback">Por favor ingresa un correo válido.</div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                            />
                            <label htmlFor="password">Contraseña</label>
                            <div className="invalid-feedback">La contraseña debe tener al menos 6 caracteres.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="avatar" className="form-label">Avatar</label>
                            <input
                                type="file"
                                className="form-control"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleChange}
                            />
                        </div>

                        <button className="btn btn-primary w-100" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
