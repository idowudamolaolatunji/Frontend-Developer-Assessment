import React, { useState } from 'react'
import Header from './components/Header'
import ContentContainer from './components/ContentContainer'


// temps
import Modal from './components/Modal'
import Overloay from './components/Overloay'
import FormInput from './components/FormInput'
import user_frame from './assets/svgs/user-frame.svg';
import CustomBtn from './components/CustomBtn'

function App() {

  // const [form, setForm] = useState({
  //   email: '',
  //   name: '',
  //   password: '',
  //   role: ''
  // });

  return (
    <>
      <Header />
      <ContentContainer />


      {/* <Overloay />
      <Modal handleClose={''}>
        <div className="flex flex-col gap-2 items-center mb-[40px]">
            <img src={user_frame} className='w-[50px] h-[50px]' />
            <p className='text-[24px] capitalize font-semibold'>New user</p>
        </div>

        <div className="flex flex-col gap-[16px] w-[100%]">
          <FormInput title="full name" type="text" placeHolder="New User's Email Address" value={form.name}
            handleChange={(e) => setForm({ ...form, name: e.target.value })} />
          <FormInput title="email address" type="email" placeHolder="New User's Full Name" value={form.email}
            handleChange={(e) => setForm({ ...form, email: e.target.value })}/>
          <FormInput title="role" type="select" placeHolder="Selete Role" value={form.role} 
            handleChange={(e) => setForm({ ...form, role: e.target.value })} />
          <FormInput title="create password" type="password" placeHolder="Create a Password for New User"value={form.password}
            handleChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>

        <CustomBtn handleSubmit={''} isLoading={false} text='Add User' />
      </Modal> */}
    </>
  )
}

export default App