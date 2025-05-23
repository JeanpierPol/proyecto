import { useState, useEffect } from "react";

export const ButtonShowPassword = ({ inputRef }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.type = show ? "text" : "password";
    }
  }, [show, inputRef]);

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => setShow(prev => !prev)}
      tabIndex={-1}
    >
      <i className={`bi ${show ? "bi-eye-slash-fill" : "bi-eye-fill"}`} />
    </button>
  );
};
