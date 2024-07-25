

import React from 'react';
import close from '../assets/svgs/close.svg'

function Modal({ children, handleClose }) {
  return (
    <div className='rounded-sm min-w-[300px] md:w-[450px] h-auto bg-white p-[24px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
      <span onClick={handleClose} className='absolute right-[15px] top-[15px] cursor-pointer'>
        <img src={close} className='w-[18px] h-[18px]'/>
      </span>
        {children}
    </div>
  )
}

export default Modal