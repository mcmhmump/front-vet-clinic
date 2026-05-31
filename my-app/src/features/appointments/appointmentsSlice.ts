import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Appointment {
  id: string;
  doctorName: string;
  ownerFullName: string;
  phone: string;
  petName: string;
  petType: string;
  service: string;
  date: string;
  time: string;
  status: "planned" | "completed" | "cancelled";
}

interface AppointmentsState {
  items: Appointment[];
}

const initialState: AppointmentsState = {
  items: [],
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.items.push(action.payload);
    },
    cancelAppointment: (state, action: PayloadAction<string>) => {
      const appointment = state.items.find((item) => item.id === action.payload);
      if (appointment) {
        appointment.status = "cancelled";
      }
    },
  },
});

export const { addAppointment, cancelAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;