import React from 'react';

import logo_img from '../assets/logo.png';
import user_img from '../assets/pngs/Ellipse 775.png'
import search from '../assets/svgs/search.svg';
import bell from '../assets/svgs/BellSimple.svg';
import setting from '../assets/svgs/Gear.svg';
import inquiry from '../assets/svgs/Question.svg';
import wallet from '../assets/svgs/Wallet.svg';
import NavItem from './NavItem';


function Header() {
  return (
    <header className='flex md:flex-row items-center justify-between h-[80px] pl-5 pr-5 md:pl-10 md:pr-10'>
        <div className="flex flex-row gap-[20px] items-center">
            <img src={logo_img} alt="" className='w-[42px]' />

            <div className="bg-gray w-[100%] md:w-[280px] lg:w-[420px] pl-3 pr-3 pt-1.5 pb-1.5 rounded-sm flex items-center gap-2">
                <img src={search} className='w-[16px]' />
                <input type="text" className='bg-transparent w-[100%] placeholder:text-sm p-0' placeholder='Search here...' />
            </div>
        </div>


        <div className="items-center gap-6 hidden md:flex">
            <NavItem text="Notifications" icon={bell} />
            <NavItem text="Wallet" icon={wallet} />
            <NavItem text="Inquires" icon={inquiry} />
            <NavItem text="Settings" icon={setting} focused />
            <span>
                <img src={user_img} className='w-[35px] h-[35px] rounded-[50%]' />
            </span>
        </div>
    </header>
  )
}

export default Header