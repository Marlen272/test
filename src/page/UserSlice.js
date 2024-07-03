import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    isRegistered: false,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const { username } = action.payload
            const userExists = state.users.find(user => user.username === username)
            if (!userExists) {
                state.users.push(action.payload)
                state.isRegistered = true
            } else {
                state.isRegistered = false
            }
        },
        resetRegistration: (state) => {
            state.isRegistered = false
        }
    },
})

export const { registerUser, resetRegistration } = userSlice.actions;

export default userSlice.reducer;
