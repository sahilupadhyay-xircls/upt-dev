import React from 'react'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import '@src/views/tables/reactstrap/ResponsiveTable.css'


const customers = [
  {
    id: '#890051',
    name: 'Lanette Deble',
    email: 'ldeble25@spotify.com',
    profilePhoto: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    country: 'USA',
    totalSpend: '$1000'
  },
  {
    id: '#343593',
    name: 'Zed Rawe',
    email: 'ldeble25@spotify.com',
    profilePhoto: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    country: 'Libya',
    totalSpend: '$2200'
  },
  {
    id: '#586615',
    name: 'Yank Luddy',
    email: 'ldeble25@spotify.com',
    profilePhoto: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    country: 'Portugal',
    totalSpend: '$4100'
  },
  {
    id: '#179914',
    name: 'Valenka Turbill',
    email: 'valenka25@spotify.com',
    profilePhoto: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    country: 'Argentina',
    totalSpend: '$3100'
  },
  {
    id: '#356230',
    name: 'Taryn Ducker',
    email: 'tarynducker@spotify.com',
    profilePhoto: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    country: 'Mexico',
    totalSpend: '$5400'
  }
  
]

const ResponsiveTable = () => {
  return (
    <div className="table-responsive">
      <Table>
        <thead>
          <tr>
            <th style={{width:"15px", textAlign:"center"}}>CUSTOMER</th>
            <th className='text-center'>CUSTOMER ID</th>
            <th className='text-center'>COUNTRY</th>
            <th className='text-center'>TOTAL SPEND</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            
              <tr key={customer.id}>
                <td className='d-flex justify-content-start'>
                  <Image src={customer.profilePhoto} roundedCircle style={{ width: '50px' }}></Image>
                  <div className='d-flex flex-column'>
                  <div style={{ marginLeft: "4vh", marginTop: "1vh", fontWeight:"bold"}}>{customer.name}</div>
                  <div style={{ marginLeft: "4vh" }}>{customer.email}</div>
                  </div>
                </td>
                <td className='text-center fw-bold'>{customer.id}</td>
                <td className='text-center'>{customer.country}</td>
                <td className='text-center fw-bold'>{customer.totalSpend}</td>
              </tr>
            
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ResponsiveTable
