import axios from 'axios'
import { getClientCookies } from './Cookies'
const qs = require('querystringify')

export const BASE_URL = 'http://192.168.2.12:5050'

export const Create = (baseURL = BASE_URL) => {

    const api = axios.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
        },
        timeout: 50000,
    })

    function getAuthorization(payload: any) {
        return {
            headers: {
                ...(payload.token ?
                    { Authorization: payload.token }
                    :
                    { Authorization: getClientCookies('token') }
                ),
            },
        }
    }

    const GET = (payload: any) =>
        api.get(`${payload?.path}?${qs.stringify(payload?.params)}`, {})

    const POST = (payload: any) =>
        api.post(`${payload?.path}`, payload?.params, {})

    const PUT = (payload: any) =>
        api.put(payload?.path, payload?.params, {})

    const DELETE = (payload: any) =>
        api.delete(`${payload?.path}?${qs.stringify(payload?.params)}`, {})

    // Your api down here - Never deleting this line
    /* User */
    const signUp = (payload: any) =>
        api.post(`api/v1/user/sign-up`, payload, {})

    const signIn = (payload: any) =>
        api.post(`api/v1/user/sign-in`, payload, {})

    const getMyInformation = (payload: any) =>
        api.get(`api/v1/user/my-information`, getAuthorization(payload))

    return {
        GET,
        POST,
        PUT,
        DELETE,
        // exports - Never deleting this line
        signUp,
        signIn,
        getMyInformation
    }
}

const APIs: any = Create()

export default APIs
