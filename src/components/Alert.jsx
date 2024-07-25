import React from 'react'
import Overloay from './Overloay'
import Modal from './Modal'

function Alert() {
  return (
    <>
    <Overloay />
    <Modal>
        <div className="flex flex-col gap-2 items-center mb-[40px]">
            <p className='text-[13px] text-center text-dark-gray'>Something went wrong!!</p>
        </div>
    </Modal>
    </>
    
  )
}

export default Alert