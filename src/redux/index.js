import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})
