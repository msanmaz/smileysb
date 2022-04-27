import { wrapper } from '../config/slice'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'



const App = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={theme}>
      <Layout Component={Component} pageProps={pageProps} />
    </ChakraProvider>
  )
}

const withRedux = wrapper.withRedux(App, { debug: false })

export default withRedux