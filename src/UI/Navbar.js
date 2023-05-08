import React from 'react'

export default function Navbar(props) {
  return (
    <div className='flex justify-between content-center bg-slate-300 px-24 py-4'>
      <div>Bank App</div>
      <div>
        <button onClick={props.showRegisterModal} className='mr-4'>Register</button>
        <button onClick={props.showLoginModal}>Login</button>
      </div>
    </div>
  )
}
