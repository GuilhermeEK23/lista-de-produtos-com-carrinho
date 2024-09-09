import { useEffect } from 'react';
import './Modal.css';

function Modal({modalIsOpen, setModalIsOpen}){
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape"){
        setModalIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleEsc);
  
    return () => {
      window.removeEventListener("keydown", handleEsc);
    }
  });

  if (!modalIsOpen) return null;

  return (
    <div className='modal-overlay' onClick={() => setModalIsOpen(false)}>
      <div className='modal-contant' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={() => setModalIsOpen(false)}>
          &times;
        </button>
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <button>Start New Order</button>
      </div>
    </div>
  );
}

export default Modal;