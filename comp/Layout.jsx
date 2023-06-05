import Head from 'next/head'
import Navigation from '../comp/Navigation'
import Footer from '../comp/Footer'



export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Titel</title>
        <meta name="description" content="Bum Bum Bielefeld" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
    <Footer />
    </>
  )
}
