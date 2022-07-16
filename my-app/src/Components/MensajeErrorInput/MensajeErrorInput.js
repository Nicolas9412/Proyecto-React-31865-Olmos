import "./mensajeErrorInput.css";

const MensajeErrorInput = ({ mensajeError }) => {
  if (!mensajeError) return null;
  return (
    <div className="d-flex justify-content-between align-items-center messageErrorContainer">
      <div className="d-flex align-items-center">
        <p className="messageErrorText">{mensajeError}</p>
      </div>
      <span className="d-flex align-items-center messageErrorIcono">
        <i className="bi bi-exclamation-diamond"></i>
      </span>
    </div>
  );
};
export default MensajeErrorInput;
