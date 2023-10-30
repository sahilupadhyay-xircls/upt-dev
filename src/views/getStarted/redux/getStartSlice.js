import { createSlice } from '@reduxjs/toolkit'


const getStartSlice = createSlice({
    name: "getStartSlice",
    initialState: {
        email_id: '',
        email_name: '',
        whatsapp_num:'',
        whatsapp_ccode:'91',
        whatsapp_name:'',
        sms_num:'',
        sms_ccode:'91',
        sms_name:''
    },
    reducers: {
        email_id: (state, action) => {
            state.email_id = action.payload
        },
        email_name: (state, action) => {
            state.email_name = action.payload
        },
        whatsapp_num: (state, action) => {
            state.whatsapp_num = action.payload
        },
        whatsapp_ccode: (state, action) => {
            state.whatsapp_ccode = action.payload
        },
        whatsapp_name: (state, action) => {
            state.whatsapp_name = action.payload
        },
        sms_num: (state, action) => {
            state.sms_num = action.payload
        },
        sms_ccode: (state, action) => {
            state.sms_ccode = action.payload
        },
        sms_name: (state, action) => {
            state.sms_name = action.payload
        }
    
    }
})

// export const getStartSlice_data = (state) => state

export const { email_id, email_name, whatsapp_num, whatsapp_ccode, whatsapp_name, sms_ccode, sms_num, sms_name } = getStartSlice.actions
export default getStartSlice.reducer