import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { data, columns } from './column'
import DataTable from 'react-data-table-component'


const RecommendationTable = () => {
    return (
        <>
            <div className='react-dataTable'>
                <DataTable
                    noHeader
                    data={data}
                    width="100%"
                    colWidths={100}
                    columns={columns}
                    className='react-dataTable'
                    sortIcon={<AiFillCaretDown size={8} />}
                    // selectableRows
                //   paginationRowsPerPageOptions={[10, 25, 50, 100]}
                />
            </div>
        </>
    )
}

export default RecommendationTable