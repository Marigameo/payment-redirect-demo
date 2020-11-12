import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function orderStatus () {
    const router = useRouter()
    useEffect(() => {
        window.addEventListener('popstate', function (event) {
            router.push('/')
        }, false);
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Order status page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>This is the orderStatus page</h1>
        </div>
    )
}