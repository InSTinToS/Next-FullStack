import Style from '../styles/pages/styles'

import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const [session, loading] = useSession()

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <>
          {!session && (
            <div className='sign'>
              Not signed in <br />
              <button onClick={() => signIn('auth0')}>Sign in</button>
            </div>
          )}
          {session && (
            <div className='sign'>
              Signed in as: {session.user.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          )}
          {loading && (
            <div>
              <h1>Loading ...</h1>
            </div>
          )}
        </>
      </main>
    </Style>
  )
}

export default Home
