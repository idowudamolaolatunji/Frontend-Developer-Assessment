import React from 'react'

function NavItem({ icon, text, focused }) {
  return (
    <span className='flex flex-col gap-1 items-center cursor-pointer'>
        <img src={icon} className='w-[18px] h-[18px]' />
        <p className={`text-[13px] text-neutral-500 ${focused ? 'text-primary-600 font-semibold' : ''}`}>{text}</p>
    </span>
  )
}

export default NavItem