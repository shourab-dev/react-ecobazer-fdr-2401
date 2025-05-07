import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const products = useSelector(state => state.products)
  console.log(products);
  
  return (
    <footer>
      
    </footer>
  )
}

export default Footer
