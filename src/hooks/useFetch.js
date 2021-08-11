import { useEffect, useState, useRef } from "react";

// Recibe la url de la API y regresa los datos, el estado de carga y los posibles errores

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setstate({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

            // El estado sólo se actualiza si el componente está montado

                if (isMounted.current) {
                    if (data.message === 'Not Found') {
                        return setstate({
                            loading: false,
                            error: 'Ese Usuario no existe',
                            data: null
                        });
                    }

                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState no se llamó');
                }
            })
    }, [url]);

    return state;
}