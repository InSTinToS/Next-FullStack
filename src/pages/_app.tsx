import GlobalStyle from '../styles'
import theme from '../styles/theme'

import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <AuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </AuthProvider>
  </ThemeProvider>
)

export default MyApp
