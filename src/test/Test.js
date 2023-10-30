import React from 'react'
import S1 from './components/S1'
import S3 from './components/S3'
import S4 from './components/S4'
import Sales from './components/Sales'
import S5 from './components/S5'
import S6 from './components/S6'

export default function Test() {
  return (
    <div className='w-75 m-auto bg-white'>

      <h1 className='text-center py-5'>test</h1>
      <S6/>
      <S1 />
      <div className='0 w-50'>
        <Sales />
      </div>
      <S3 />
      <S4/>
      <S5/>
    </div>
  )
}
