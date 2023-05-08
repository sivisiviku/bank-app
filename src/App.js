import './App.css';
import Navbar from './UI/Navbar';
import Modal from './UI/Modal'
import Login from './Form/Login'
import Register from './Form/Register'
import { useState } from 'react';

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  function hideModal() {
    setIsShowModal(false)
  }

  function showRegisterModal() {
    setModalContent(<Register/>)
    setIsShowModal(true)
  }

  function showLoginModal() {
    setModalContent(<Login/>)
    setIsShowModal(true)
  }

  return <>
    <Navbar showRegisterModal={showRegisterModal} showLoginModal={showLoginModal} />
    {
      isShowModal && <Modal onClose={hideModal}>{modalContent}</Modal>
    }
  </>;
}

export default App;
