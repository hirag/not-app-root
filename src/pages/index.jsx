import { Main } from 'src/components/Main'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from '../hooks/useInputArray';
import { useBgLightBlue } from '../hooks/useBgLightBlue';

export default function Index() {
  const { foo, isShow, handleClck, handleDisplay } = useCounter();
  const { text, array, handleAdd } = useInputArray();
  useBgLightBlue();

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
