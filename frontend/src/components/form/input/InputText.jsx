import { useRef } from "react";
import { ButtonShowPassword } from "../../ButtonShowPassword";

export const InputText = ({ type = "text", name, label, register, error, watchValue, className = "", ...rest }) => {
    const inputRef = useRef(null);
    const value = watchValue?.(name);
    const isValid = !error && Boolean(value);

    const { ref: registerRef, ...registeredProps } = register(name);

    const getValidationClass = (base = "form-control") =>
        `${base} ${error ? "is-invalid" : isValid ? "is-valid" : ""} ${className}`.trim();

    return (
        <div className="input-group mb-3">
            <div className="form-floating flex-grow-1">
                <input
                    type={type}
                    id={name}
                    placeholder={label}
                    className={getValidationClass()}
                    ref={(el) => {
                        registerRef(el);
                        inputRef.current = el;
                    }}
                    {...registeredProps}
                    {...rest}
                />
                <label htmlFor={name}>{label}</label>
            </div>
            {type === "password" && <ButtonShowPassword inputRef={inputRef} />}
            {error && <div className="invalid-feedback d-block">{error.message}</div>}
        </div>
    );
};
