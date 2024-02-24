import { useEffect, useState } from 'react';
import { getDataFromAPI } from '../utils/api';

const useFetchData = (apiUrl) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // initial time start loading
        setLoading(true)

        getDataFromAPI(apiUrl)
            .then(response => {
                setLoading(false)
                setData(response)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            });
    }, [apiUrl])

    return {data, loading, error}
};

export default useFetchData;