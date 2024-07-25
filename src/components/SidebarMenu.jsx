import React from 'react'
import SidebarItem from './SidebarItem';

import bell from '../assets/svgs/BellSimple-1.svg';
import acct from '../assets/svgs/User.svg';
import users from '../assets/svgs/Users.svg';
import security from '../assets/svgs/Lock.svg';
import tag from '../assets/svgs/Tag.svg';
import pricing from '../assets/svgs/Money.svg';
import backups from '../assets/svgs/Cloud.svg';


function SidebarMenu() {
  return (
    <div className='bg-white min-w-[240px] p-[16px] rounded-md border-1 hidden md:block border-secondary-50'>
        <p className="text-sm mb-5 font-semibold">Settings</p>

        <div className="flex flex-col gap-1 pb-4 border-b-2 border-gray">
            <SidebarItem icon={acct} text="account" />
            <SidebarItem icon={security} text="security" />
            <SidebarItem icon={bell} text="notifications" />
            <SidebarItem icon={pricing} text="pricing" />
            <SidebarItem icon={tag} text="sales" />
            <SidebarItem icon={users} text="users & roles" focused={true} />
            <SidebarItem icon={backups} text="backups" />
        </div>
    </div>
  )
}

export default SidebarMenu