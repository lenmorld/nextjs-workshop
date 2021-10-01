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
                        <a href="/blog/some-really-interesting-title">Some really interesting title</a>
                        <br />
                        <small>September 29, 2021</small>
                    </li>
                    <li>
                        <a href="/blog/you-want-to-read-this-one">You want to read this one</a>
                        <br />
                        <small>September 27, 2021</small>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}