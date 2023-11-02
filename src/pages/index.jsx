import { useCallback, useEffect, useState } from 'react';
import { Main } from 'src/components/Main'



export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClck = (e) => {
    //前の状態を用いて数字を変化させたい場合は、setFooの中に関数を書く
    setFoo(foo => foo + 1);
    setFoo(foo => foo + 1)

  };

  useEffect(() => {
    // console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    }
  }, [])
  return (
    <>
      <h1>{foo}</h1>
      <button href='/about' onClick={handleClck}>ボタン</button >
      <Main page="index" />
    </>
  )
}
