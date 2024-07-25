import React from 'react'

function CustomBtn({ handleSubmit, isLoading, text, customStyle }) {
  return (
    <button disabled={isLoading} onClick={handleSubmit} className={`rounded-sm p-[8px] w-[100%] text-[14px] text-white bg-primary-600 ${customStyle}`}>{isLoading ? 'Loading...' : text}</button>
  )
}

export default CustomBtn