/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import Header from '../../components/Header'
import { Touchable } from '../../components/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ProductList from '../../components/Product/list'
import { colors } from '../../styles/theme.json'

export default function Category() {
  return (
    <>
      <Header
        title="Woman"
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="shopping-outline" size={25} color={colors.gray50} />
          </Touchable>
        )}
      />
      <ProductList />
    </>
  )
}
