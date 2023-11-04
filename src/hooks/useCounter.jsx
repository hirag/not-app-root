import { useCallback, useState } from 'react';

export const useCounter = () => {

    const [foo, setFoo] = useState(1);
    const [isShow, setIsShow] = useState(true);

    const handleClick = useCallback(() => {
        //前の状態を用いて数字を変化させたい場合は、setFooの中に関数を書く
        if (foo < 10) {
            setFoo(prevFoo => prevFoo + 1);
        }
    }, [foo]);

    const handleDisplay = useCallback(() => {
        setIsShow((prevIsShow) => !prevIsShow);
    }, []);

    return { foo, isShow, handleClick, handleDisplay };
}