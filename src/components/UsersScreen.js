import React, { useContext, useState } from 'react';
import { SearchUsers } from './SearchUsers';
import { User } from './User';
import HashLoader from "react-spinners/HashLoader";
import { Toast } from './ui/Toast';
import { ToastContext } from './ui/ToastContext';

export const UsersScreen = () => {

    const {toastIsOpen} = useContext(ToastContext);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="users__screen">
            <SearchUsers 
                setUsers={setUsers} 
                setLoading={setLoading} 
                setErrorMessage={setErrorMessage}
            />
            
            <div className="users__container">
                {
                    loading
                    ?
                    <HashLoader color="#c95d6a"/>
                    :
                    (
                        <ul className="users__list container-fluid">
                            {
                                users.map(user => (
                                    <User user={user} key={user.id} />
                                ))
                            }
                        </ul>
                    )
                }
            </div>

            {
                toastIsOpen
                &&
                <Toast errorMessage={errorMessage} />
            }
        </div>
    )
}
