import { useCallback, useEffect, useState } from 'react';
import { Main } from 'src/components/Main'



export default function Home() {
  const [foo, setFoo] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);


  const handleClck = useCallback(() => {
    //前の状態を用いて数字を変化させたい場合は、setFooの中に関数を書く
    console.log(foo);
    if (foo < 10) {
      setFoo(foo => foo + 1);
    }
  }, [foo]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";

    }
  }, [foo])

  console.log(text);
  return (
    <>
      {isShow ? <h1>{foo}</h1> : null}
      <input type="text" value={text} onChange={e => {
        if (text.length >= 5) { return; }
        setText(e.target.value);
      }} />
      <button href='/about' onClick={handleClck}>ボタン</button >
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button >
      <Main page="index" />
    </>
  )
}
