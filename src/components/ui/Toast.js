import React, { useContext } from 'react';
import { ToastContext } from './ToastContext';

export const Toast = ({errorMessage}) => {

    const {setToastIsOpen} = useContext(ToastContext);


    return (
        <div className="toast__container row animate__animated animate__fadeIn animate__faster">
            <div onClick={() => setToastIsOpen(false)} className="fas fa-times toast__close"></div>
            <span className="fas fa-exclamation-circle col-sm-2 toast__error"></span>
            <p className="col-sm-10">{errorMessage}</p>
        </div>
    )
}
