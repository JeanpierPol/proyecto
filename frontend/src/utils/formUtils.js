export const getValidationClass = ({ error, value, base = "form-control", className = "" }) => {
  const isValid = !error && Boolean(value);
  return `${base} ${error ? "is-invalid" : isValid ? "is-valid" : ""} ${className}`.trim();
};
