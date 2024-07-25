import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

import user_frame from '../assets/svgs/user-frame.svg';
import filter from '../assets/svgs/filter.svg'
import search from '../assets/svgs/search-light.svg';
import add from '../assets/svgs/add-white.svg';

import Overloay from './Overloay';
import Modal from './Modal';
import FormInput from './FormInput';
import CustomBtn from './CustomBtn';
import axios from 'axios';
import AlertUi from './Alert';



function TableHead({ handleRefetch }) {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState({
        type: '', message: ''
    });
    const [error, setError] = useState(false);

    const [form, setForm] = useState({
        email: '',
        name: '',
        password: '',
        role: ''
    });


    useEffect(function() {
        if(!showModal) {
            form.name = ''
            form.email = ''
            form.password = ''
            form.role = ''
        }
    }, [showModal]);


    // SHOW ADD NEW USER MODAL
    function handleAddUser() {
        setShowModal(true)
    }

    // HANDLE SUBMIT NEW USER
    async function handleSubmitUser (e) {
        e.preventDefault();
        if(!form.name || !form.email || !form.password || !form.role) {
            setShowAlert({ type: 'error', message: 'Fill up all fields' })
            return;
        }
        setIsLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}`, {
                email: form.email, 
                name: form.name, 
                role: form.role, 
                password: form.password, 
            });
            setShowModal(false);
            setShowAlert({ type: 'success', message: 'Craeted Successfully!' })
            handleRefetch(true)
        } catch(err) {
            setShowAlert({ type: 'error', message: err.message });
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="bg-white flex items-center p-[14px] gap-[20px]">
                <div className="bg-transparent w-[100px] md:w-[250px] rounded-md border-[1.4px] border-gray pl-2 pr-2 pt-1 pb-1 flex items-center gap-2 ">
                    <img src={search} className='w-[16px]' />
                    <input type="text" className='bg-transparent w-[100%] placeholder:text-sm p-0' placeholder='Search here...' />
                </div>

                <button className='rounded-md border-[1.4px] border-gray pt-1 pb-1 pl-2 pr-2 bg-transparent flex items-center gap-1'>
                    <img src={filter} className='w-[16px]' />
                    <p className='text-[15px] text-dark-gray'>Filter</p>
                </button>

                <button onClick={handleAddUser} className='rounded-md border-none ml-auto pt-1.5 pb-1.5 pl-2 pr-2 bg-primary-600 flex items-center gap-1'>
                    <img src={add} className='w-[16px]' />
                    <p className='text-[14px] text-white'>Add User</p>
                </button>
            </div>


            {/* MODAL TO ADD NEW USER */}
            {createPortal(
                showModal && (
                    <>
                        <Overloay handleClose={() => setShowModal(false)} />
                        <Modal handleClose={() => setShowModal(false)}>
                            <div className="flex flex-col gap-2 items-center mb-[40px]">
                                <img src={user_frame} className='w-[50px] h-[50px]' />
                                <p className='text-[24px] capitalize font-semibold'>New user</p>
                            </div>

                            <form className="flex flex-col gap-[16px] w-[100%]">
                                <FormInput title="full name" type="text" placeHolder="New User's Email Address" value={form.name}
                                    handleChange={(e) => setForm({ ...form, name: e.target.value })} />
                                <FormInput title="email address" type="email" placeHolder="New User's Full Name" value={form.email}
                                    handleChange={(e) => setForm({ ...form, email: e.target.value })} />
                                <FormInput title="role" type="select" placeHolder="Selete Role" value={form.role}
                                    handleChange={(e) => setForm({ ...form, role: e.target.value })} />
                                <FormInput title="create password" type="password" placeHolder="Create a Password for New User" value={form.password}
                                    handleChange={(e) => setForm({ ...form, password: e.target.value })} />

                                <CustomBtn handleSubmit={handleSubmitUser} isLoading={isLoading} text='Add User' />
                            </form>

                        </Modal>

                    </>
                ), document.body
            )}

            {(showAlert.message || showAlert.type) && (
                <AlertUi type={showAlert.type} message={showAlert.message} />
            )}
        </>
    )
}

export default TableHead