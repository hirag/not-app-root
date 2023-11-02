import { Inter } from 'next/font/google'
import styles from '@/src/components/Main/Main.module.css'
import { Headline } from '@/src/components/Headline'
import { Header } from '@/src/components/Header'
import { Links } from '@/src/components/Links'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
    return (
        <>
            <Header title={props.page} />
            <main className={`${styles.main} ${inter.className}`}>
                <Headline code={props.page} />
                <Links />
            </main>
        </>
    )
}