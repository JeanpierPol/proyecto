export const FormComponent = ({
    type = "text",
    name,
    label,
    register,
    error,
    watchValue,
    className = "",
    ...rest
}) => {
    const value = watchValue?.(name);
    const isValid = !error && (type === "checkbox" ? value : Boolean(value));

    if (type === "checkbox") {
        return (
            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    id={name}
                    {...register(name)}
                    className={`form-check-input ${error ? "is-invalid" : isValid ? "is-valid" : ""}`}
                    {...rest}
                />
                <label className="form-check-label" htmlFor={name}>
                    {label}
                </label>
                {error && <div className="invalid-feedback">{error.message}</div>}
            </div>
        );
    }

    if (type === "file") {
        return (
            <div className="form-group mb-3">
                <input
                    type={type}
                    id={name}
                    placeholder={label}
                    {...register(name)}
                    className={`form-control ${error ? "is-invalid" : isValid ? "is-valid" : ""} ${className}`}
                    {...rest}
                />
                {error && <div className="invalid-feedback">{error.message}</div>}
            </div>
        );
    }

    return (
        <div className="form-floating mb-3">
            <input
                type={type}
                id={name}
                placeholder={label}
                {...register(name)}
                className={`form-control ${error ? "is-invalid" : isValid ? "is-valid" : ""} ${className}`}
                {...rest}
            />
            <label htmlFor={name}>{label}</label>
            {error && <div className="invalid-feedback">{error.message}</div>}
        </div>
    );
};
