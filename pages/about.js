import Head from 'next/head'
import { Footer } from '../components/Footer'
import HeadLine from '../components/HeadLine'
import Links from '../components/Links'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeadLine  page="about"/>
        <Links/>
      </main>

      <Footer/>
    </div>
  )
}
