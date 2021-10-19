import Layout from '../components/layout'
import Image from 'next/image'

export default function About() {
    return (
        <Layout>
            <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden'}}>
                <Image
                    src="/profile.jpg" // Route of the image file
                    layout={'fill'}
                    alt="Lenny"
                    objectFit={'cover'}
                />
            </div>

            <h1>About me</h1>

            <p>
                Hey there. I cannot think of anything right now, 
                so here are some randomly generated phrases. Enjoy. 
                Fire up your browser show pony we need to get all stakeholders 
                up to speed and in the right place and eat our own dog food I have 
                zero cycles for this market-facing. 
                Big data we need to aspirationalise our offerings products need 
                full resourcing and support from a cross-functional team in 
                order to be built, 
                maintained, and evolved not enough bandwidth.
            </p>
        </Layout>
    )
}
