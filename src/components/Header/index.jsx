import Head from 'next/head'
import Link from 'next/link'
import styles from './Header.module.css';

export function Header(props) {
    return (
        <div>
            <Head>
                <title>{props.title} page</title>
            </Head>
            <header className={styles.header}>
                <Link href='/'>
                    <p className={styles.p}>Index</p>
                </Link>
                <Link href='/about'>
                    <p className={styles.p}>About</p>
                </Link>
            </header>
        </div>
    )
}
