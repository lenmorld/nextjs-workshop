import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="profile.png" alt="me"
                        style={{
                            border: '1px solid #ffffff',
                            borderRadius: '50%',
                            width: '150px',
                            objectFit: 'cover',
                        }}
                        />
                <h1>About me</h1>

                <p>
                    Hey there. I can&apos;t think of anything right now, so here&apos;s some randomly generated phrases. Enjoy. Fire up your browser show pony we need to get all stakeholders up to speed and in the right place and eat our own dog food I have zero cycles for this market-facing. Big data we need to aspirationalise our offerings products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved not enough bandwidth.
                </p>
            </div>
        </Layout>
    )
}