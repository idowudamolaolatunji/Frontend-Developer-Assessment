import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import close from '../assets/svgs/close.svg'

function AlertUi({ type, message}) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {createPortal(
        showAlert && (
          <div className={`fixed top-0 left-1/2 min-w-[250px] z-50 -translate-x-1/2 p-3 flex items-center justify-between ${type === "success" ? 'bg-green-300' : 'bg-red-300'}`}>
            <p className={`text-dark-gray text-[14px] ${type === "success" ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
            <span onClick={() => setShowAlert(false)} className='cursor-pointer'>
              <img src={close} className='w-[18px] h-[18px]'/>
            </span>
          </div>
        ), document.body
      )}
    </>
  )
}

export default AlertUi