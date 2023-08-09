/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Touchable } from '../../components/index'
import CategoryList from '../../components/Categories/list'
import { colors } from '../../styles/theme.json'

export default function Marketplace() {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="shopping-outline" size={28} color={colors.gray50} />
          </Touchable>
        )}
      />
      <CategoryList />
    </>
  )
}
