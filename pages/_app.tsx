import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/shared/Layout/Layout';
import { AppWrapper } from '../components/shared/AppWrapper/AppWrapper';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>

  );
}

export default MyApp
