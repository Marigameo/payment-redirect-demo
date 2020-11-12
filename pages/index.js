import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
export default function Home () {
  const router = useRouter()
  const addTocart = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Demo app
        </h1>

        <p className={styles.description}>
          Next JS payment redirect demo
        </p>

        <div className={styles.grid}>
          <h3>Take me to cart &rarr;</h3>
          <p>Your cart items will be displayed</p>
          <button onClick={addTocart}>Add to cart</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
