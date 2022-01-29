import { configureStore } from '@reduxjs/toolkit'
import productosSlice from './productosSlice'
import usuarioSlice from './usuarioSlice'

export default configureStore({
  reducer: {
      productos: productosSlice,
        usuario: usuarioSlice, 
  }
})