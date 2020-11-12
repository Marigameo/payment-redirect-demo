import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import Head from 'next/head'

export default function orderHistory () {

    return (
        <div className={styles.container}>
            <Head>
                <title>Order history page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>This is the order history page</h1>
        </div>
    )
}