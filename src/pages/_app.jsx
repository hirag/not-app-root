import '@/src/styles/globals.css'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from '../hooks/useInputArray';
import { useBgLightBlue } from '../hooks/useBgLightBlue';

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();
  return <Component {...pageProps} {...counter} {...inputArray} />
}
