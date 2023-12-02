import { useState, useCallback } from "react";

export default function useRequest() {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const load = useCallback((url) => {
        setLoading(true);
        setError(null);
        setData(null);
        fetch(url)
            .then(res => {
                res.text().then(text => {
                    try {
                        const json = JSON.parse(text);
                        if (res.ok) {
                            setData(json);
                        } else {
                            setError(json.message);
                        }
                    }
                    catch {
                        if (res.ok) {
                            setError("Not a valid JSON Response")
                        } else {
                            setError(`${res.status} (${text})`);
                        }
                    }
                });
            })
            .catch((e) => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return [ load, data, isLoading, error ];

}