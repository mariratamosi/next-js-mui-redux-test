"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // status: false,
  info: {
    doctorId: null,
    selectedDate: null,
    selectedTime: null,
  },
}

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    updatePendingAppointment: (state, action) => {
      // state.status = true
      state.info = action.payload
    },
    completePendingAppointment: (state) => {
      console.log("completePendingAppointment")
      state.info = {
        doctorId: null,
        selectedDate: null,
        selectedTime: null,
      }
    },
  },
})

export const { updatePendingAppointment, completePendingAppointment } =
  appointmentSlice.actions

export default appointmentSlice.reducer
