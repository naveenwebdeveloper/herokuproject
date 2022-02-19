import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userToken: sessionStorage.getItem("UserToken"),
    uid: sessionStorage.getItem("Uid")
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.userToken = action.payload.Utoken;
            state.uid = action.payload.UUid;
        }
    },
})

// Action creators are generated for each case reducer function
export const { userLogin } = userSlice.actions

export default userSlice.reducer