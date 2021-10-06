import Link from 'next/link'

import Layout from '../../components/layout'

import styles from './blog.module.css'

export default function Blog() {
    return (
        <Layout>
            <h1>My blog posts</h1>
            <ul className={styles.postList}>
                <li>
                    <Link href="/blog/my-first-post"><a>My first post</a></Link>
                    <br />
                    <small>October 1, 2021</small>
                </li>
                <li>
                    <Link href="/blog/my-second-post"><a>My second post</a></Link>
                    <br />
                    <small>October 2, 2021</small>
                </li>
            </ul>
        </Layout>
    )
}
