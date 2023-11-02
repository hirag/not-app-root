import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'
import { Header } from '@/components/Header'

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