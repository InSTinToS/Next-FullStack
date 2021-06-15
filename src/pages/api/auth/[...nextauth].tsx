import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      clientId: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_CLIENT_DOMAIN,
    }),
  ],
})
