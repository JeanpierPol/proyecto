import { useRef } from "react";
import { ButtonShowPassword } from "../../ButtonShowPassword";
import { getValidationClass } from "../../../utils/formUtils";

export const InputText = ({ type = "text", name, label, register, error, watchValue, className = "", ...rest }) => {
    const inputRef = useRef(null);
    const { ref: registerRef, ...registeredProps } = register(name);
    const value = watchValue?.(name);

    return (
        <div className="input-group mb-3">
            <div className="form-floating flex-grow-1">
                <input
                    type={type}
                    id={name}
                    placeholder={label}
                    className={getValidationClass({ error, base: "form-control", className, value })}
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
