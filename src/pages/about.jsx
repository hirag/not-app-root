import { Main } from "src/components/Main";


export default function About({ foo, isShow, handleClick, handleDisplay, text, array, handleAdd }) {
    return (
        <>
            {isShow ? <h1>{foo}</h1> : null}
            <input type="text" value={text} onChange={e => {
                if (text.length >= 5) { return; }
                setText(e.target.value);
            }} />
            <button href='/about' onClick={handleClick}>ボタン</button >
            <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button >
            <button onClick={handleAdd}>追加</button>
            <ul>
                {array.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
            <Main page="about" />
        </>
    )
}

