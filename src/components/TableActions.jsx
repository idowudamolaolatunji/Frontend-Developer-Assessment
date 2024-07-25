import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import user_frame from '../assets/svgs/user-frame.svg';
import bin from '../assets/svgs/bin.svg';
import Overloay from './Overloay';
import Modal from './Modal';
import FormInput from './FormInput';
import CustomBtn from './CustomBtn';
import axios from 'axios';
import AlertUi from './Alert';



function TableActions({ selected, handleRefetch }) {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState({
        edit: false, delete: false
    });
    const [showAlert, setShowAlert] = useState({
        type: '', message: ''
    });

    const [form, setForm] = useState({
        email: selected?.email || '',
        name: selected?.name || '',
        password: selected?.password || '',
        role: selected?.role || '',
        id: selected?.id || null
    });


    // FUNCTIONS TO TOGGLE/HANDLE BOTH THE DELETE AND THE EDIT MODAL
    function handleOpenDeleteModal() {
        setShowModal({ ...showModal, delete: true });
    }
    function handleOpenEditModal() {
        setShowModal({ ...showModal, edit: true });
    }
    function handleCloseDeleteModal() {
        setShowModal({ ...showModal, delete: false });
    }
    function handleCloseEditModal() {
        setShowModal({ ...showModal, edit: false });
    }


    // HANDLE EDIT USER
    async function handleEditUser(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.patch(`${import.meta.env.VITE_SERVER_URL}${form?.id}`, {
                email: form.email, 
                name: form.name, 
                role: form.role, 
                password: form.password, 
            });
            setShowAlert({ type: 'success', message: 'Editted Successfully!' })
            handleRefetch(true)
            handleCloseEditModal()
        } catch(err) {
            setShowAlert({ type: 'success', message: err.message });
        } finally {
            setIsLoading(false)
        }
    }

    // HANDLE DELETE USER
    async function handleDeleteUser() {
        try {
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}${form?.id}`);
            handleRefetch(true)
            setShowAlert({ type: 'success', message: 'Deleted Successfully!' })
            handleCloseDeleteModal()
        } catch(err) {
            setShowAlert({ type: 'error', message: err.message })
        }
    }


  return (
    <>
    

        <div className='flex items-center gap-[10px]'>
            <button onClick={handleOpenEditModal} 
                className='text-[13px] text-primary-600'>Edit</button>
            <button onClick={handleOpenDeleteModal} 
                className='text-[13px] text-secondary-50'>Delete</button>
        </div>


        {createPortal(
            showModal.edit && (
                <>
                    <Overloay handleClose={handleCloseEditModal} />
                    <Modal handleClose={handleCloseEditModal}>
                        <div className="flex flex-col gap-2 items-center mb-[40px]">
                            <img src={user_frame} className='w-[50px] h-[50px]' />
                            <p className='text-[24px] capitalize font-semibold'>Edit user</p>
                        </div>

                        <form className="flex flex-col gap-[16px] w-[100%]" onSubmit={handleEditUser}>
                            <FormInput title="full name" type="text" placeHolder="New User's Email Address" value={form.name}
                                handleChange={(e) => setForm({ ...form, name: e.target.value })} />
                            <FormInput title="email address" type="email" placeHolder="New User's Full Name" value={form.email}
                                handleChange={(e) => setForm({ ...form, email: e.target.value })} />
                            <FormInput title="role" type="select" placeHolder="Selete Role" value={form.role}
                                handleChange={(e) => setForm({ ...form, role: e.target.value })} />
                            <FormInput title="create password" type="password" placeHolder="Create a Password for New User" value={form.password}
                                handleChange={(e) => setForm({ ...form, password: e.target.value })} />

                            <CustomBtn handleSubmit={handleEditUser} isLoading={isLoading} text='Edit User' />
                        </form>

                    </Modal>
                </>
            ), document.body
        )}


        {createPortal(
            showModal.delete && (
                <>
                    <Overloay handleClose={handleCloseDeleteModal} />
                    <Modal handleClose={handleCloseDeleteModal}>
                        <div className="flex flex-col gap-2 items-center mb-[40px]">
                            <p className='text-[24px] font-semibold'>Delete this user</p>
                            <p className='text-[13px] text-center text-dark-gray'>This user and all associated data will be permanently removed. Do you wish to continue</p>
                        </div>

                        <div className='flex items-center gap-[20px] justify-center'>
                            <button onClick={handleCloseDeleteModal} className='text-[13px] bg-gray text-dark-gray flex items-center p-[4px] pl-[8px] pr-[8px] border border-dark-gray rounded-[4px]'>Cancel action</button>
                            <button onClick={handleDeleteUser} className='text-[13px] flex items-center p-[4px] pl-[8px] pr-[8px] bg-bg-red text-color-red font-medium border border-color-red rounded-[4px]'>
                                <img src={bin} className='w-[18px]' />
                                Yes, Delete
                            </button>
                        </div>
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

export default TableActions