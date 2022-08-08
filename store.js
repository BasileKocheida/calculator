import { configureStore } from '@reduxjs/toolkit'
import calculatorSlice from './Slice'

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice
  },
})