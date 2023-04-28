import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
<<<<<<< HEAD
    extraReducers: (builder) => { }
})

export const { } = todoSlice.actions
=======
    extraReducers: (builder) => {}
})

export const {} = todoSlice.actions
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
export default todoSlice.reducer