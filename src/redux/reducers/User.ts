import { createAction, createReducer } from "@reduxjs/toolkit"
import { assignObject } from "../ultils"

const signIn = createAction<any>('user/signIn')
const signUp = createAction<any>('user/signUp')
const getMyInformation = createAction<any>('user/getMyInformation')

const reducer = createReducer(
    {
        myInformation: { isLoading: true },
        signIn: {},
        signUp: {}
    },
    (builder) => {
        builder
        .addCase(signIn, (state, action) => {
            state.signIn = assignObject(state.signIn, action.payload)
        })

        .addCase(signUp, (state, action) => {
            state.signUp = assignObject(state.signIn, action.payload)
        })

        .addCase(getMyInformation, (state, action) => {
            state.myInformation = assignObject(state.signIn, action.payload)
        })
    }
)

export default reducer