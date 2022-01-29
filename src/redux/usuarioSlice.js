import { createSlice } from '@reduxjs/toolkit'

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        "id": 0,
        "username": "",
        "firstName": "",
        "lastName": "",
        "credit": "0"
    },
reducers: {
    setUsuario: (state, action) => {
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.credit = action.payload.credit;
    }}
})