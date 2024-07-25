import React, { useEffect, useState } from 'react'
import BreadCrumbs from './BreadCrumbs'
import Table from './TableUi'
import axios from 'axios';
import TableHead from './TableHead';

function MainContent() {
    const [helpRefetch, setHelpReset] = useState(false);
    const [data, setData] = useState([]);


    // FETCH ALL USERS
    useEffect(function() {
        async function fetchData() {
            try {
              const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}`);
              setData(res.data);
              setHelpReset(false);
            } catch (error) {
              console.error(error);
            }
        }


        fetchData();
    }, [helpRefetch])


  return (
    <div className='flex flex-col gap-[32px] w-[100%]'>
        <BreadCrumbs category="Settings" subCategory="Users & Roles" />

        <div className="">
            <h2 className="text-2xl mb-2">Users & Roles</h2>
            <p className="text-secondary-50 text-sm">Manage all users in your business</p>
        </div>

        <div className='rounded-md bg-white overflow-hidden'>
            <TableHead handleRefetch={setHelpReset} />
            <Table data={data} handleRefetch={setHelpReset} />
        </div>

    </div>
  )
}

export default MainContent