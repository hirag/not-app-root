import { useCallback, useEffect } from 'react';
import { Main } from 'src/components/Main'



export default function Home() {
  // const foo = 1;

  // const handleClck = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo)
  // }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    }
  }, [])
  return (
    <>
      {/* <a href='/about' onClick={handleClck}>ボタン</a > */}
      <Main page="index" />
    </>
  )
}
