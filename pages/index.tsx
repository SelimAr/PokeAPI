import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../Components/Main'
import Title from '../Components/Title'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Pokemon Database</title>
      </Head>

      <main> 
        <Title/>
        <Main/> 
      </main>

    </div>
  )
}

export default Home
