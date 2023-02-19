import { AxiosResponse, AxiosError } from "axios";
import { call, put } from "redux-saga/effects";
import { toastError, toastSuccess } from "../../components/Toast";
import { setClientCookies } from "../../services/Cookies";
import { callAPISuccessfully } from "../ultils";

function* signIn(api: any, action: any) {
    const { payload } = action;
    try {
        yield put({ 
            type: 'user/signIn', 
            payload: {
                isLoading: true
            }
        });

        const response: AxiosResponse = yield call(api.signIn, payload);
        
        if (callAPISuccessfully(response)){
            yield put({ 
                type: 'user/signIn', 
                payload: {
                    res: response?.data?.data,
                    isLoading: false,
                    isError: false
                }
            });

            if (response?.data?.data?.token){
                setClientCookies('token', response?.data?.data?.token)
                toastSuccess('Sign in successfully.')
                yield put({ 
                    type: 'getMyInformation', 
                    payload: {}
                });
            }
        }
        else {
            yield put({ 
                type: 'user/signIn', 
                payload: { isLoading: false, isError: true }
            });
        }
        
    } catch (error: Error | AxiosError | any) {
        yield put({ 
            type: 'user/signIn', 
            payload: { isLoading: false, isError: true }
        });
        toastError(error?.response?.data?.error)
    }
}

function* signUp(api: any, action: any) {
    const { payload } = action;
    try {
        yield put({ 
            type: 'user/signUp', 
            payload: {
                isLoading: true
            }
        });

        const response: AxiosResponse = yield call(api.signUp, payload);
        
        if (callAPISuccessfully(response)){
            yield put({ 
                type: 'user/signUp', 
                payload: {
                    res: response?.data?.data,
                    isLoading: false,
                    isError: false
                }
            });

            if (response?.data?.data?.token){
                setClientCookies('token', response?.data?.data?.token)
                toastSuccess('Sign up successfully.')
                yield put({ 
                    type: 'getMyInformation', 
                    payload: {}
                });
            }
        }
        else {
            yield put({ 
                type: 'user/signUp', 
                payload: { isLoading: false, isError: false }
            });
        }
        
    } catch (error: Error | AxiosError | any) {
        yield put({ 
            type: 'user/signUp', 
            payload: { isLoading: false, isError: false }
        });
        toastError(error?.response?.data?.error)
    }
}

function* signOut(api: any, action: any) {
    const { payload } = action;
    try {
        setClientCookies('token', undefined)
        yield put({ 
            type: 'getMyInformation', 
            payload: {}
        });   
    } catch (error: Error | AxiosError | any) {
        yield put({ 
            type: 'user/signOut', 
            payload: { isLoading: false, isError: true }
        });
        toastError(error?.response?.data?.error)
    }
}

function* getMyInformation(api: any, action: any) {
    const { payload } = action;
    try {
        yield put({ 
            type: 'user/getMyInformation', 
            payload: {
                isLoading: true
            }
        });

        const response: AxiosResponse = yield call(api.getMyInformation, payload);
        
        if (callAPISuccessfully(response)){
            yield put({ 
                type: 'user/getMyInformation', 
                payload: {
                    res: response?.data?.data,
                    isLoading: false,
                    isError: false
                }
            });
        }
        else {
            yield put({ 
                type: 'user/getMyInformation', 
                payload: { isLoading: false, isError: false }
            });
        }
        
    } catch (error: Error | AxiosError | any) {
        yield put({ 
            type: 'user/getMyInformation', 
            payload: { res: {}, isLoading: false, isError: false }
        });
    }
}

export {
    signIn,
    signUp,
    signOut,
    getMyInformation
}