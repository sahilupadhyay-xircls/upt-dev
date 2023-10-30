// import React from 'react'
import { React } from 'react'
import { data, Column } from '../Product_Review/Column'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
// import { Input } from 'reactstrap'

// ** Reactstrap Imports
// import { Card, CardHeader, CardTitle } from 'reactstrap'

const ProdReviewTable = () => {
    // const BootStrapCheckbox = forwardRef((props, ref) => {
    //     <div className='form-check'>
    //         <Input type='checkbox' ref={ref} {...props}/>
    //     </div>
    // })
    
    return (
        <>
            <div className='react-dataTable'>
                <DataTable
                    noHeader
                    data={data}
                    columns={Column}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    selectableRows
                //   paginationRowsPerPageOptions={[10, 25, 50, 100]}
                />
            </div>
        </>
    )
}

export default ProdReviewTable