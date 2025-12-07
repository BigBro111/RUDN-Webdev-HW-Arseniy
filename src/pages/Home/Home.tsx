import React from 'react'
import Header from '../../components/Header/Header'
import Catalog from '../../components/Catalog/Catalog'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Catalog />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default Home
