import { useCallback, useEffect, useState } from 'react';
import { Main } from 'src/components/Main'



export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClck = useCallback(() => {
    //前の状態を用いて数字を変化させたい場合は、setFooの中に関数を書く
    console.log(foo);
    if (foo < 10) {
      setFoo(foo => foo + 1);
    }
  }, [foo]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";

    }
  }, [foo])
  return (
    <>
      <h1>{foo}</h1>
      <button href='/about' onClick={handleClck}>ボタン</button >
      <Main page="index" />
    </>
  )
}
