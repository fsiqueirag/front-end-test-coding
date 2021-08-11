import React from 'react';
import { Link } from 'react-router-dom';

export const User = ({user}) => {

    const {login, id, avatar_url} = user;

    return (
        <li className="users__list-item">
            <div className="users__user-preview-container">
                <div className="users__user-preview">
                    <img src={avatar_url} alt="user profile" className="users__user-avatar" />
                    <div className="users__user-info">
                        <p className="users__user-login">{login}</p>
                        <span className="users__user-id">
                            <span className="users__user-id-label">id:</span> {id}
                        </span>
                    </div>
                </div>
            </div>
            
            <Link to={`/product/${login}`} className="users__profile-button fas fa-user" />
        </li>
    )
}
