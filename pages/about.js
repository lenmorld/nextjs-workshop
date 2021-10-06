import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <img src="profile.jpg" style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '50%'
            }} />
            <h1>About me</h1>
        </Layout>
    )
}
