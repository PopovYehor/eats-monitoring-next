import { App } from "@/components/App";
import {Provider} from "react-redux"
import store from "@/store/store";
import "@/styles/globals.scss"
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
    return (
      <>
      <Head>
        <title>Eats Monitoring</title>
      </Head>
        <Provider store={store}>
          <App>
            <Component {...pageProps} />
          </App>
        </Provider>
      </>
    );
  }
  
  export default MyApp;