import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import { store } from "../redux/store";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  
  
  return (
    
  <AuthProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </AuthProvider>
  
  )
 
}

export default MyApp
