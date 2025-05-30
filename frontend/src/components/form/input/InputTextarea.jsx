import { useRef } from "react";
import { getValidationClass } from "../../../utils/formUtils";

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
    return (
        <div className="input-group mb-3">
            <div className="form-floating flex-grow-1">
                <textarea
                    id={name}
                    placeholder={label}
                    className={getValidationClass({ error, base: "form-control", className })}
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
