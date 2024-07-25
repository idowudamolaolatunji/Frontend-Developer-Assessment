import React from 'react'
import SidebarMenu from './SidebarMenu'
import MainContent from './MainContent'

function ContentContainer() {
  return (
    <section className='bg-gray w-[100%] h-[90vh] p-[24px] flex gap-[60px]'>
        <SidebarMenu />
        <MainContent />
    </section>
  )
}

export default ContentContainer