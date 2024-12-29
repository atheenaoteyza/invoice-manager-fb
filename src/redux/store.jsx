import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import invoicesReducer from "./invoiceSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    invoices: invoicesReducer,
  },
});