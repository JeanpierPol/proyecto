export const InputFile = ({ name, label, register, error, className = "", watchValue, ...rest }) => {
    const getValidationClass = () =>
        `form-control ${error ? "is-invalid" : "is-valid"} ${className}`.trim();

    return (
        <div className="form-group mb-3">
            <input
                type="file"
                id={name}
                placeholder={label}
                className={getValidationClass()}
                {...register(name)}
                {...rest}
            />
            {error && <div className="invalid-feedback">{error.message}</div>}
        </div>
    );
};
