import Link from 'next/link'

import Layout from '../../components/layout'

import styles from './blog.module.css'

export default function Blog() {
    return (
        <Layout>
            <h1>Blog</h1>

            <div>
                <p>
                    Here are some of my latest posts. I like writing.
                </p>
                <ul className={styles.list}>
                    <li>
                        <Link><a href="/blog/some-really-interesting-title">Some really interesting title</a></Link>
                        <br />
                        <small>September 29, 2021</small>
                    </li>
                    <li>
                        <Link><a href="/blog/you-want-to-read-this-one">You want to read this one</a></Link>
                        <br />
                        <small>September 27, 2021</small>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}