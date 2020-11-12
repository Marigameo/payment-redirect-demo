import styles from '../styles/Home.module.css'
import React from 'react';
import Head from 'next/head'
import Router from 'next/router'

class orderStatus extends React.Component {
    componentDidMount () {
        window.addEventListener('popstate', function (event) {
            console.log('entering into popstate')
            Router.push('/')
        }, false);
    }
    render () {
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
}

export default orderStatus;