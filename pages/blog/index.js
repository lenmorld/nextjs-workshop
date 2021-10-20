import Link from 'next/link'

import Layout from '../../components/layout'

import styles from './blog.module.css'

import { getPosts } from '../../lib/posts'

export default function Blog({ postsData }) {
    console.log("postsData: ", postsData)

    return (
        <Layout>
            <h1>My blog posts</h1>
            <ul className={styles.postList}>
                {
                    postsData.map(post => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}><a>{post.title}</a></Link>
                            <br />
                            <small>{post.date}</small>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const postsData = getPosts()
  
    // return props passed to component
    return {
      props: {
        postsData
      }
    }
  }
