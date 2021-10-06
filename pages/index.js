import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
// error-handling
// console.log(wa)

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>
          Welcome to my blog
        </h1>

        <p className={styles.description}>
          This is my blog. Read my stuff.
        </p>
    </Layout>
  )
}
