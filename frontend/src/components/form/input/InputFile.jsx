import { getValidationClass } from "../../../utils/formUtils";

export const InputFile = ({ name, label, register, error, className = "", watchValue, ...rest }) => {
    const value = watchValue?.(name);
    return (
        <div className="form-group mb-3">
            <input
                type="file"
                id={name}
                placeholder={label}
                className={getValidationClass({ error, base: "form-control", className, value })}
                {...register(name)}
                {...rest}
            />
            {error && <div className="invalid-feedback">{error.message}</div>}
        </div>
    );
};
