import Link from 'next/link'

export default function Nav() {
    return <nav>
        <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'stretch'}}> 
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
    </nav>
}