import React from 'react'

function SidebarItem({ icon, text, focused }) {
    return (
        <div className={`flex flex-row gap-2 items-center pl-2 pr-2 pt-3 pb-3 cursor-pointer hover:bg-gray rounded-sm transition-all ${focused ? 'bg-primary-50' : ''}`}>
            <img src={icon} alt={text} className='w-[17px] h-[17px]' />
            <p className={`text-[13px] text-neutral-400 capitalize ${focused ? 'font-semibold text-primary-600' : ''} `}>{text}</p>
        </div>
    )
}

export default SidebarItem