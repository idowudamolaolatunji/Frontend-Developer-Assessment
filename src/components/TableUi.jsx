import React from 'react'

import DataTable from 'react-data-table-component';
import arrows from '../assets/svgs/arrows.svg'
import TableActions from './TableActions';

const customStyles = {
    head: {
        style: { maxHeight: '35px' }
    },
    headCells: {
        style: { maxHeight: '35px', backgroundColor: '#F0F2F5' },
	},
    rows: {
        style: { minHeight: '55px' }
    }
}


function TableUi({ data }) {
    const SortIcon = () => <img src={arrows} className='w-[18px] h-[18px]' />


    const columns = [
        {
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
            width: '250px'
        },
        {
            name: 'Email Address',
            selector: row => row?.email,
            sortable: true,
            width: '350px'
        },
        {
            name: 'Role',
            selector: row => (
                <span className={``}>{row?.role}</span>
            ),
            sortable: true,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <>
                    <TableActions selected={row} />
                    {console.log(row)}
                </>
            )
        },
    ]

  return (
    <DataTable 
        columns={columns}
        data={data}
        sortIcon={<SortIcon />}
        customStyles={customStyles}
        selectableRows
        persistTableHead
    />
)
}

export default TableUi