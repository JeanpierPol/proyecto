import { useRef } from "react";

export const InputTextarea = ({
    name,
    label,
    register,
    error,
    watchValue,
    className = "",
    rows = 4,
    ...rest
}) => {
    const inputRef = useRef(null);
    const value = watchValue?.(name);
    const isValid = !error && Boolean(value);

    const { ref: registerRef, ...registeredProps } = register(name);

    const getValidationClass = (base = "form-control") =>
        `${base} ${error ? "is-invalid" : isValid ? "is-valid" : ""} ${className}`.trim();

    return (
        <div className="input-group mb-3">
            <div className="form-floating flex-grow-1">
                <textarea
                    id={name}
                    placeholder={label}
                    className={getValidationClass()}
                    rows={rows}
                    style={{ minHeight: "100px" }}
                    ref={(el) => {
                        registerRef(el);
                        inputRef.current = el;
                    }}
                    {...registeredProps}
                    {...rest}
                />
                <label htmlFor={name}>{label}</label>
            </div>
            {error && <div className="invalid-feedback d-block">{error.message}</div>}
        </div>
    );
};
