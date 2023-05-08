import React from 'react'
import ReactDOM from 'react-dom'

function Backdrop(props) {
    return <div onClick={props.onClose} className='fixed top-0 left-0 w-full h-[100vh] z-20 bg-black opacity-75' />
}

function ModalOverlay(props) {
    return <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 bg-white p-4 rounded-md shadow-md z-30'>
        {props.children}
    </div>
}

const portalElement = document.getElementById('overlays')

export default function Modal(props) {
  return <>
    {
        ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />, 
            portalElement
        )
    }
    {
        ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )
    }
  </>
}
