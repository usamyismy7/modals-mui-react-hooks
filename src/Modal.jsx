import React from "react";
import logo from "./images/nft.jpg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={logo} alt='nft' />
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>
            X
          </p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
