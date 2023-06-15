'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface CartState {
    amount: number
}

// Define the initial state using that type
const initialState: CartState = {
    amount: 0,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// export const { login, logout } = CartSlice.actions

export default CartSlice.reducer
