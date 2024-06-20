import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'

export default configureStore({
  reducer: {
    counter: ProductSlice
  },
})