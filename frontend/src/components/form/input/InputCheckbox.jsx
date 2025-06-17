import { getValidationClass } from "../../../utils/formUtils";

export const InputCheckbox = ({ name, label, register, error, className = "", watchValue, ...rest }) => {
    const value = watchValue?.(name);
    return (
        <div className="form-check mb-3">
            <input
                type="checkbox"
                id={name}
                className={getValidationClass({ error, base: "form-check-input ", className, value })}
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
