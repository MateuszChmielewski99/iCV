import type { NextPage } from 'next'
import { Layout } from './common/components/layout'
import { About, Experience, Footer } from './sections'

const Home: NextPage = () => {
  return (
    <Layout>
        <About />
        <Experience />
        <Footer />
    </Layout>
  )
}

export default Home
