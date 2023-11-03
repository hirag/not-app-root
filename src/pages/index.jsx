import { useCallback, useEffect, useState } from 'react';
import { Main } from 'src/components/Main'



export default function Home() {
  const [foo, setFoo] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);


  const handleClck = useCallback(() => {
    //前の状態を用いて数字を変化させたい場合は、setFooの中に関数を書く
    if (foo < 10) {
      setFoo(prevFoo => prevFoo + 1);
    }
  }, [foo]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {

    setArray((prevArray) => {
      if (prevArray.some(item => item === text)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
    </>
  )
}
