import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksReducer.js'

export default configureStore({
  reducer: {
    counter: booksReducer
  }
})