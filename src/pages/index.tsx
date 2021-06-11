import Style from '../styles/pages/styles'
import { NextPage } from 'next'
import Head from 'next/head'

import logo from '../assets/logo.png'
import Arrow from '../assets/arrow.svg'

// NextPage: React.FC do Next
// Head: header especifico desta página
// Qualquer importação de imagem só é permitida através da lib "next-images"
// Svgs ficam mais leves usando "babel-plugin-inline-react-svg" e em forma de Component

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello World</h1>

        <Arrow />
        <img src={logo} alt='logo' />
      </main>
    </Style>
  )
}

export default Home
