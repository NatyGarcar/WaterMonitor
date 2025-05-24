import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [jsonData, setJsonData] = useState(null);
    const [latest, setLatest] = useState('');

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch data");
                }
                return res.json();
            })
            .then(data => {
                setJsonData(data.data);
                setLatest(data.last_update);
                setIsPending(false);
                setError(null);
                // console.log("data fetch successful");
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
    }, [url]);

    return { jsonData, latest, isPending, error }
}

export default useFetch;