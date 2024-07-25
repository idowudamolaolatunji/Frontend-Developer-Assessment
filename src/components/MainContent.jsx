import React, { useEffect, useState } from 'react'
import BreadCrumbs from './BreadCrumbs'
import Table from './TableUi'
import axios from 'axios';
import TableHead from './TableHead';

function MainContent() {
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
          const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}`);
          setData(res.data);
          console.log(res.data)
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(function() {
        fetchData();
    }, [])


  return (
    <div className='flex flex-col gap-[32px] w-[100%]'>
        <BreadCrumbs category="Settings" subCategory="Users & Roles" />

        <div className="">
            <h2 className="text-2xl mb-2">Users & Roles</h2>
            <p className="text-secondary-50 text-sm">Manage all users in your business</p>
        </div>

        <div className='rounded-md bg-white overflow-hidden pb-10'>
            <TableHead />
            <Table data={data} />
        </div>

    </div>
  )
}

export default MainContent



/* 

<Overloay />
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
      </Modal>

      */