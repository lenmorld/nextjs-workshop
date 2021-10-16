import Head from 'next/head'

import Layout from '../../components/layout'

import { getPostIds, getPostDataById } from '../../lib/posts'
import { formatDateFromISOString } from '../../utils/dates'

export default function BlogPost({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            {postData.title}
            <br />
            {formatDateFromISOString(postData.date)}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Layout>
    )
}


// returns all the possible 'id's for [id].js
export async function getStaticPaths() {
    const postIds = getPostIds()

    console.log("postIds: ", postIds)

    return {
        paths: postIds,
        fallback: false
    }
}

// params from getPostIds
export async function getStaticProps({ params }) {
    const postData = await getPostDataById(params.id)

    return {
        props: {
            postData
        }        
    }
}
