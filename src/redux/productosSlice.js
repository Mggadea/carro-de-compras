import { createSlice } from '@reduxjs/toolkit'

const productosSlice = createSlice({
    name: 'productos',
    initialState: {
        'productos': []
    },
    reducers: {
        setProductos: (state, action) => {
            state.productos = action.payload;
        },
        addProducto: (state, action) => {
            state.productos.push(action.payload);
        },
        removeProducto: (state, action) => {
            state.productos = state.productos.filter(producto => producto.id !== action.payload);
        }
    }
});