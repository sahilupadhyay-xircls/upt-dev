// ** React Imports
import { Fragment } from 'react'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerDefault = ({ setPicker, picker }) => {
  // ** State
  
  return (
    <Fragment>
      <Flatpickr options={{minDate: "today"}} className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
    </Fragment>
  )
}

export default PickerDefault
