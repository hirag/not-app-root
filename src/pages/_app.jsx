import '@/src/styles/globals.css'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from '../hooks/useInputArray';
import { useBgCol } from '../hooks/useBgCol';

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgCol();
  return <Component {...pageProps} {...counter} {...inputArray} />
}
