import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from '../components/nav'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>
          Welcome to my blog
        </h1>
        <p className={styles.description}>
          This is my blog. Please read my stuff.
        </p>
    </Layout>
  )
}
