import React from 'react'
import ProductIntro from './Page2/ProductIntro'
import Application from './Page2/Application'
import Product from './Page2/Product'
import Solutions from './Page2/Solutions.jsx'
import CaoCard from './Page2/CaoCard.jsx'

export default function Page2() {
  return (
    <div>
      <ProductIntro/>
      <Product/>
      <Application/>
      <Solutions/>
      <CaoCard/>
    </div>
  )
}
