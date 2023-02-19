import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSuccess = (message:string) => {
    toast(message);
}

const toastError = (message:string) => {
    toast(message);
}

export default function Toast(){

    return (
        <ToastContainer autoClose={3000} />
    );
}

export {
    toastSuccess,
    toastError
}