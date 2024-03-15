import React, { useState, useEffect } from 'react';


export const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async ()=>{
            setLoading(true);

            try {
                let res = await fetch(url);
                if(!res.ok){
                    let err = new Error("Fetch Request Error");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "An error ocurred";
                    throw err;
                }
                const json = await res.json();
                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            } finally {
                if(!signal.aborted){
                    setLoading(false);
                }
            }
        }; fetchData();
        return () => abortController.abort();
    }, [url]);

    return {data, error, loading}
}