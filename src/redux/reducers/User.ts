import { createAction, createReducer } from "@reduxjs/toolkit"
import { assignObject } from "../ultils"

const signIn = createAction<any>('user/signIn')
const getMyInformation = createAction<any>('user/getMyInformation')

const reducer = createReducer(
    {
        myInformation: {},
        signIn: {},
        signUp: {}
    },
    (builder) => {
        builder
        .addCase(signIn, (state, action) => {
            state.signIn = assignObject(state.signIn, action.payload)
        })

        .addCase(getMyInformation, (state, action) => {
            state.myInformation = assignObject(state.signIn, action.payload)
        })
    }
)

export default reducer