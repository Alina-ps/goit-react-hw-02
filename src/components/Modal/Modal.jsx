import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ onClose, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${s.modal} ${isVisible ? s.show : s.hide}`}>
      <p className={s.modalText}>Thank you for your feedback!</p>
      <button onClick={onClose} className={s.modalBtn}>
        x
      </button>
    </div>
  );
};

export default Modal;
