import { Inter } from 'next/font/google'
import styles from '@/src/components/Main/Main.module.css'
import { Headline } from '@/src/components/Headline'
// import { Header } from '@/src/components/Header'
import { Links } from 'src/components/Links'
import { Header } from 'src/components/Header'
import { useEffect } from 'react'
import { useCallback, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
    {
        href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Docs",
        description: "Find in-depth information about Next.js features and&nbsp;API."
    },
    {
        href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Learn",
        description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
    },
    {
        href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Templates",
        description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
    },
    {
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Deploy",
        description: "Instantly deploy your Next.js site to a shareable URL with& nbsp; Vercel."
    },
];

export function Main(props) {
    const [items, setItems] = useState(ITEMS);
    const handleReduce = useCallback(() => {
        setItems((prevItems) => {
            return prevItems.slice(0, prevItems.length - 1);
        });
    }, [])
    return (
        <>
            <Header t={props.page} />
            <main className={`${styles.main} ${inter.className}`}>
                <Headline code={items.length} />
                <Links items={items} handleReduce={handleReduce} />
            </main>
        </>
    )
}