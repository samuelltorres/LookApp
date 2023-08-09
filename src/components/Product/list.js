import React from 'react'
import { ScrollView } from '..'
import Product from '.'

export default function ProductList() {
  return (
    <ScrollView fluid>
      {Array.from(Array(20))?.map((item) => (
        <Product
          cover="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          brand="Raf Simons"
          title="Large striped cardigan"
          price="$ 1080"
        />
      ))}
    </ScrollView>
  )
}
