import React from 'react'
import Header from '../../components/Header'
import { Box, Text, Touchable } from '../../components/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ProductList from '../../components/Product/list'

export default function Category() {
  return (
    <>
      <Header
        title="Categoria X"
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="shopping-outline" size={30} />
          </Touchable>
        )}
      />
      <ProductList />
    </>
  )
}
