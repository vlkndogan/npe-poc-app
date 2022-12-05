import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from 'react'

import LayoutManager from '../components/LayoutManager'
function MyApp({ Component, pageProps }) {
  //https://blog.logrocket.com/handling-bootstrap-integration-next-js/

  return (
    <LayoutManager Component={Component} pageProps={pageProps}></LayoutManager>
  )
}

export default MyApp
