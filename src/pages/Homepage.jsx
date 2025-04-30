import React from 'react'
import Banner from '../components/Banner/Banner'
import ProductCard from '../components/utils/ProductCard'

const Homepage = () => {
  return (
    <>
      <Banner/>
      <section id='featuredProducts'>
        <div className="container grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </section>
    </>
  )
}

export default Homepage
