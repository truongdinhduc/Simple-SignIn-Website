import { parseCookies, setCookie, destroyCookie } from 'nookies'

const setClientCookies = (key: string, value: any) => {
    setCookie(null, key, value, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })
}

const getClientCookies = (key: string) => {
    const cookies = parseCookies()
    if (cookies){
        return cookies[key];
    }
    return undefined;
}

export {
    setClientCookies,
    getClientCookies
}