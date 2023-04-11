import React, { useState } from 'react';
import Modal from './Modal';
import ModalMui from './Modal-mui';

function App() {
  const [openModal, setOpenModal] = useState(false);

  function modalStatus() {
    if (openModal) {
      return setOpenModal(false);
    } else {
      return setOpenModal(true);
    }
  }

  return (
    <div>
      <button className='modalButton' onClick={() => modalStatus()}>Open Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <ModalMui />
    </div>
  );
}

export default App;
