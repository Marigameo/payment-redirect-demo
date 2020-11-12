import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
export default function Payment () {
    const router = useRouter()
    const payAmount = (e) => {
        e.preventDefault()
        router.replace('/orderStatus')
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Payment page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>This is the payment page</h1>
            <button onClick={payAmount}>Pay now</button>
        </div>
    )
}