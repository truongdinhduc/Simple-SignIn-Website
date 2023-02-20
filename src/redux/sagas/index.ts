import { all, takeLatest } from 'redux-saga/effects'
import APIs from '../../services/APIs'
import { getMyInformation, signIn, signInWithGoogle, signOut, signUp } from './UserSaga'

export default function* rootSaga() {
    yield all([
        // User
        takeLatest('signIn', signIn, APIs),
        takeLatest('signInWithGoogle', signInWithGoogle, APIs),
        takeLatest('signUp', signUp, APIs),
        takeLatest('signOut', signOut, APIs),
        takeLatest('getMyInformation', getMyInformation, APIs),
    ])
}