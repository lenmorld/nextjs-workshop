import Layout from '../../components/layout'

import { getPostIds } from '../../lib/posts'

export default function BlogPost() {
    return (
        <Layout>
            ...
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