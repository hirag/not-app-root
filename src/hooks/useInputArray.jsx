import { useCallback, useState } from 'react';

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleAdd = useCallback(() => {
        setArray((prevArray) => {
            if (prevArray.some(item => item === text)) {
                alert("同じ要素が既に存在します。");
                return prevArray;
            }
            return [...prevArray, text];
        });
    }, [text]);

    return { text, array, handleAdd };
}