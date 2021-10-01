import Link from 'next/link'

import Layout from '../../components/layout'

import styles from './blog.module.css'

export default function Blog() {
    return (
        <Layout>
            <h1>Blog</h1>

            <div className={styles.container}>
                <ul className={styles.list}>
                    <li>
                        <Link href="/blog/some-really-interesting-title"><a>Some really interesting title</a></Link>
                        <br />
                        <small>September 29, 2021</small>
                    </li>
                    <li>
                        <Link href="/blog/you-want-to-read-this-one"><a>You want to read this one</a></Link>
                        <br />
                        <small>September 27, 2021</small>
                    </li>
                    <li>
                        <Link href="/blog/you-want-to-read-this-one-again"><a>Really want read this one again</a></Link>
                        <br />
                        <small>September 26, 2021</small>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}