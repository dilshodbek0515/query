import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slice/CounterSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})
