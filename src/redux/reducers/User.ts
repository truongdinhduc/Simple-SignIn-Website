import { createAction, createReducer } from "@reduxjs/toolkit"
import { assignObject } from "../ultils"

const signIn = createAction<any>('user/signIn')
const signInWithGoogle = createAction<any>('user/signInWithGoogle')
const signUp = createAction<any>('user/signUp')
const getMyInformation = createAction<any>('user/getMyInformation')

const reducer = createReducer(
    {
        signIn: {},
        signInWithGoogle: {},
        signUp: {},
        myInformation: { isLoading: true },
    },
    (builder) => {
        builder
        .addCase(signIn, (state, action) => {
            state.signIn = assignObject(state.signIn, action.payload)
        })

        .addCase(signInWithGoogle, (state, action) => {
            state.signInWithGoogle = assignObject(state.signInWithGoogle, action.payload)
        })

        .addCase(signUp, (state, action) => {
            state.signUp = assignObject(state.signUp, action.payload)
        })

        .addCase(getMyInformation, (state, action) => {
            state.myInformation = assignObject(state.myInformation, action.payload)
        })
    }
)

export default reducer