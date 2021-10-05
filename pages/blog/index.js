import Link from 'next/link'

export default function Blog() {
    return (
        <div>
        <h1>My blog posts</h1>
            <ul>
                <li><Link href="/blog/my-first-post"><a>My first post</a></Link></li>
                <li><Link href="/blog/my-second-post"><a>My second post</a></Link></li>
            </ul>
        </div>
    )
}
