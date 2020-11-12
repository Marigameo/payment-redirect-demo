import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Cart () {
    const router = useRouter()
    const placeOrder = (e) => {
        e.preventDefault()
        router.push('/payment')
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Cart page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>This is the cart page</h1>
            <button onClick={placeOrder}>Place order</button>
        </div>
    )
}