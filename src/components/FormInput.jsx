import React from 'react'

const roles = ["Adminsitrator", "Sales Manager", "Sales Representative"];

function FormInput({ type, title, placeHolder, value, handleChange }) {
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={`#${title}`} className='capitalize text-[12px] font-medium text-dark-gray'>{title}</label>

        {type === 'select' ? (
            <select className='bg-transparent p-2 text-[12px]  border-[1.4px] border-gray rounded-[6px]' value={value} onChange={handleChange}>
                <option className='catipalize' selected hidden>{placeHolder}</option>
               
                {roles && roles.map(role => (
                   <option className="catipalize h-[30px]" value={role}>{role}</option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                id={title}
                className='p-2 text-[12px] placeholder:text-[11px] border-[1.4px] border-gray rounded-[6px] text-dark-gray'
                placeholder={placeHolder}
                value={value}
                onChange={handleChange}
            />
        )}
    </div>
  )
}

export default FormInput