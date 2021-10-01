import Link from 'next/link'

import Layout from '../components/layout'

import styles from './projects.module.css'

export default function About() {
    return (
        <Layout>
             <div>
                 <h1>Projects</h1>
                <p>
                    Here are some of my latest projects. I like doing stuff.
                </p>
                <h3>Project one</h3>
                <p>
                    Distinctively re-engineer revolutionary meta-services and premium architectures. 
                    Intrinsically incubate intuitive opportunities and real-time potentialities. 
                    Appropriately communicate one-to-one technology after plug-and-play networks.
                </p>
                <h3>Project two</h3>
                <p>
                    Appropriately empower dynamic leadership skills after business portals. 
                    Globally myocardinate interactive supply chains with distinctive quality vectors. 
                    Globally revolutionize global sources through interoperable services.
                </p>
                <h3>Project three</h3>
                <p>
                    Efficiently enable enabled sources and cost effective products. 
                    Completely synthesize principle-centered information after ethical communities. 
                    Efficiently innovate open-source infrastructures via inexpensive materials.
                </p>
            </div>
        </Layout>
    )
}