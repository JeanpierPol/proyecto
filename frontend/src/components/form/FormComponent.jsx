import { useRef } from "react";
import { ButtonShowPassword } from "../ButtonShowPassword";

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
  const inputRef = useRef(null);
  const value = watchValue?.(name);
  const isValid = !error && (type === "checkbox" ? value : Boolean(value));

  const {
    ref: registerRef,
    ...registeredProps
  } = register(name);

  const getValidationClass = (baseClass = "form-control") => {
    return `${baseClass} ${error ? "is-invalid" : isValid ? "is-valid" : ""} ${className}`.trim();
  };

  if (type === "checkbox") {
    return (
      <div className="form-check mb-3">
        <input
          type="checkbox"
          id={name}
          className={getValidationClass("form-check-input")}
          {...register(name)}
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
  }

  return (
    <div className="input-group mb-3">
      <div className="form-floating flex-grow-1">
        <input
          type={type}
          id={name}
          placeholder={label}
          className={getValidationClass()}
          ref={el => {
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
