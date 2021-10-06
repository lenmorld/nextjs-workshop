import Link from 'next/link'

import Layout from '../../components/layout'

export default function Blog() {
    return (
        <Layout>
            <h1>My blog posts</h1>
            <ul>
                <li><Link href="/blog/my-first-post"><a>My first post</a></Link></li>
                <li><Link href="/blog/my-second-post"><a>My second post</a></Link></li>
            </ul>
        </Layout>
    )
}
