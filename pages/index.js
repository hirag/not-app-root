import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '@/components/Links'
import Headline from '@/components/Headline'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header title="Index Page" />
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title="Index Foo!!" />
        <Links />
      </main>
    </>
  )
}
