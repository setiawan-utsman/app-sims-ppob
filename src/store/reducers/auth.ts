import { createSlice } from '@reduxjs/toolkit'
import { getItem, setItem } from '../../helper/localstorage.helper'

const initialState = {
  credentials: getItem('credentials'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      setItem('credentials', payload)
      state.credentials = payload
    },
  },
})

export const { loginUser } = authSlice.actions
export default authSlice.reducer

