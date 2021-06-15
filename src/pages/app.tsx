import Style from '../styles/pages/styles'

import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'

interface HomeProps {}

const AppPage: NextPage<HomeProps> = () => {
  const [session, loading] = useSession()

  return (
    <Style>
      <Head>
        <title>App page</title>
      </Head>

      <main>
        <>
          {!session && (
            <div className='sign'>
              Not signed in <br />
            </div>
          )}
          {session && (
            <div className='sign'>
              Signed in as: {session.user.email} <br />
            </div>
          )}
        </>
      </main>
    </Style>
  )
}

export default AppPage
