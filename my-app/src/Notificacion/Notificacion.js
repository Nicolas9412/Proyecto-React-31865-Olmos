import "./notificacion.css";
import { useEffect, useState, createContext } from "react";

const Notificacion = ({ title, type }) => {
  const [background, setBackground] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (type === "success") {
      setBackground("#19af4d");
      setIcon("bi bi-check-circle-fill");
    }
    if (type === "danger") {
      setBackground("#c84040");
      setIcon("bi bi-x-circle-fill");
    }
    if (type === "warning") {
      setBackground("#ff6900");
      setIcon("bi bi-exclamation-diamond-fill");
    }
  }, [type]);

  if (title === "") return;
  return (
    <div
      className="notificacionContainer"
      style={{ backgroundColor: background }}
    >
      <p className="notificacionText">{title}</p>
      <span className="notificacionIcon">
        <i className={icon}></i>
      </span>
    </div>
  );
};

export const NotificacionContext = createContext();

export const NotificacionProvider = ({ children }) => {
  const [msgConfig, setMsgConfig] = useState({
    message: "",
    type: "",
  });
  const setNotificacion = (message, type, time = 3) => {
    setMsgConfig({ message, type });
    setTimeout(() => {
      setMsgConfig({ ...msgConfig, message: "" });
    }, time * 1000);
  };

  return (
    <NotificacionContext.Provider value={setNotificacion}>
      <Notificacion title={msgConfig.message} type={msgConfig.type} />
      {children}
    </NotificacionContext.Provider>
  );
};
