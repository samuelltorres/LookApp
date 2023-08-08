import React from 'react'
import { ScrollView, Text } from '..'
import Category from '.'

export default function CategoryList() {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
      }}>
      {Array.from(Array(20))?.map((item) => (
        <Category title={'Woman'} description={'3456 ITEMS'} />
      ))}
    </ScrollView>
  )
}
