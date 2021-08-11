import React, { useContext, useState } from 'react';
import { ToastContext } from './ui/ToastContext';

export const SearchUsers = ({setUsers, setLoading, setErrorMessage}) => {

    const {setToastIsOpen} = useContext(ToastContext);


    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = ({ target }) => {
        setSearchValue(target.value);
    }

    const handleSearch = async (e) => {
        e.preventDefault();

        if (searchValue.length < 4) {
            setToastIsOpen(true);
            setErrorMessage('La búsqueda debe ser de 4 o más caracteres.')
            setSearchValue('');
            return;
        } else if (searchValue === 'noloro') {
            setToastIsOpen(true);
            setErrorMessage('Esta búsqueda no está permitida');
            setSearchValue('');
            return;
        }

        setLoading(true);
        setSearchValue('');
        
        const resp = await fetch(`https://api.github.com/search/users?q=${searchValue}&per_page=10`);
        const {items} = await resp.json();

        if (items.length === 0) {
            setToastIsOpen(true);
            setErrorMessage('No se ha encontrado ningún usuario.')
        }

        setUsers(items);
        setLoading(false);
    }

    return (
        <form
            className="form__container"
            onSubmit={handleSearch}
        >
            <input 
                type="text" 
                onChange={handleInputChange}
                name="search"
                value={searchValue}
                placeholder="Buscar un usuario"
            />
            <button
                type="submit"
            >
                Buscar
            </button>
        </form>
    )
}
