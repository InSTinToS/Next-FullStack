import GlobalStyle from '../styles'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

import theme from '../styles/theme'

// Component: são todas as páginas

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
