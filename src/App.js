import React, { useState } from 'react';
import Modal from './Modal';
import ModalMui from './Modal-mui';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className='modalButton' onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <ModalMui />
    </div>
  );
}

export default App;
