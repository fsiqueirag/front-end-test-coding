import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { useFetch } from '../hooks/useFetch';
import { Toast } from './ui/Toast';
import { ToastContext } from './ui/ToastContext';

const baseUrl = 'https://api.github.com/users/';

export const UserScreen = () => {

    const {login} = useParams();

    const {toastIsOpen, setToastIsOpen} = useContext(ToastContext);

    const {data: user, loading, error} = useFetch(baseUrl + login);

    useEffect(() => {
        if (error) {
            setToastIsOpen(true);
        }
    }, [error, setToastIsOpen])

    return (
        <div className="user__screen container-fluid">
            <Link to="/" className="user__previous">
                <i className="fas fa-chevron-left"></i> Volver
            </Link>

            {
                loading
                ?
                <HashLoader color="#c95d6a"/>
                :
                (
                    toastIsOpen
                    ?
                    <Toast errorMessage={error} />
                    :
                    (
                        user
                        &&              
                        <div className="user__box row">
                            <img src={user?.avatar_url} className="user__avatar col-md-5" alt={user?.name} />
                            <div className="user__profile-info col-md-7">
                                <span className="user__location">{user?.location}</span>
                                <h2 className="user__name">{user?.name}</h2>
                                <h3 className="user__login">{user?.login}</h3>
                                <p className="user__bio">{user?.bio}</p>
                                <footer>
                                    <a 
                                        href={user?.html_url} 
                                        target="_blank"
                                        rel="noreferrer"
                                        className="user__github user__social"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    {
                                        user?.twitter_username
                                        &&
                                        <a 
                                        href={`https://twitter.com/${user?.twitter_username}`} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="user__twitter user__social"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    }

                                </footer>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}
