// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
