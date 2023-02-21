import { AxiosResponse } from "axios";
import { map } from "lodash";

const callAPISuccessfully = (response: AxiosResponse) => {
    return response.status === 201 || response.status === 200;
}

const assignObject = (object:any, newObject:any) => {
    let oldObject = object
    map(Object.keys(newObject), (key:any)=>{
        oldObject[key] = newObject[key]
    })
    return oldObject
}

export {
    callAPISuccessfully,
    assignObject
}