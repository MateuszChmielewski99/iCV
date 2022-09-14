import type { NextPage } from 'next'
import { Layout } from '../ui/common/components/layout'
import { About, Experience, Footer } from '../ui/sections'

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
