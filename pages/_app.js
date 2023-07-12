import DefaultLayout from '@/components/layouts/DefaultLayout';
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
