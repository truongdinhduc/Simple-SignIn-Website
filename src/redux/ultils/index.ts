import { AxiosResponse } from "axios";

const callAPISuccessfully = (response: AxiosResponse) => {
    return response.status === 201 || response.status === 200;
}

const assignObject = (object:any, newObject:any) => {
    let oldObject = object
    Object.keys(newObject).map((key:any)=>{
        oldObject[key] = newObject[key]
    })
    return oldObject
}

export {
    callAPISuccessfully,
    assignObject
}