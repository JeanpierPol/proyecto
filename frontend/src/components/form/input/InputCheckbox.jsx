export const InputCheckbox = ({ name, label, register, error, className = "", watchValue, ...rest }) => {
    const getValidationClass = () =>
        `form-check-input ${error ? "is-invalid" : "is-valid"} ${className}`.trim();

    return (
        <div className="form-check mb-3">
            <input
                type="checkbox"
                id={name}
                className={getValidationClass()}
                {...register(name)}
                {...rest}
            />
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
            {error && <div className="invalid-feedback">{error.message}</div>}
        </div>
    );
};
