import { all, takeLatest } from 'redux-saga/effects'
import APIs from '../../services/APIs'
import { getMyInformation, signIn, signOut, signUp } from './UserSaga'

export default function* rootSaga() {
    yield all([
        // User
        takeLatest('signUp', signUp, APIs),
        takeLatest('signIn', signIn, APIs),
        takeLatest('signOut', signOut, APIs),
        takeLatest('getMyInformation', getMyInformation, APIs),
    ])
}