import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  closeModal?: () => void;
  closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  closeOnOutsideClick = true,
}) => {
  const modalRef = useRef();
  const elRef = useRef<HTMLDivElement>();
  if (!elRef.current) {
    elRef.current = document?.createElement("div");
  }

  useEffect(() => {
    const elRefCurrent = elRef.current;
    const modalRoot = document.getElementById("modal");

    if (elRefCurrent && modalRoot) {
      modalRoot.appendChild(elRefCurrent);
    }

    return () => {
      if (elRefCurrent && modalRoot) {
        modalRoot.removeChild(elRefCurrent);
      }
    };
  }, []);

  useEffect(() => {
    if (closeOnOutsideClick && closeModal) {
      const modalRoot = document.getElementById("modal");
      const handleOutsideClick = (e: any) => {
        //checks if click is on modal root or the children if it's on children closeModal won't run
        if (e.target === e.currentTarget) return closeModal();
      };

      modalRoot?.addEventListener("click", handleOutsideClick);
      return () => {
        modalRoot?.removeEventListener("click", handleOutsideClick);
      };
    }
  }, []);

  return <>{createPortal(<div>{children}</div>, elRef?.current)}</>;
};

export default Modal;
