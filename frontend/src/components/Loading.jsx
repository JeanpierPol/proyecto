const Loading = ({ message = "Cargando...", centered = false }) => {
  return (
    <div className={`d-flex align-items-center ${centered ? "justify-content-center" : ""}`}>
      <strong role="status">{message}</strong>
      <div className="spinner-border ms-2" aria-hidden="true"></div>
    </div>
  );
};

export default Loading;
