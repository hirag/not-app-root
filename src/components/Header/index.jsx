import Link from 'next/link'
import Head from 'next/head';
import styles from './Header.module.css';


export function Header(props) {
    return (
        <div>
            <Head>
                <title>{props.t} page</title>
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
