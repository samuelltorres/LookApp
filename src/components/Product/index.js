import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Touchable, Cover, Box, Spacer } from '../index'

export default function Product({
  cover,
  brand,
  title,
  price,
  selected = false
}) {
  const { navigate } = useNavigation()

  return (
    <Touchable
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? '5px 0' : '0 0 1px 0'}
      onPress={() => navigate('Product')}>
      <Cover width="80px" height="80px" image={cover} />
      <Box
        style={{
          paddingBottom: 0,
          paddingTop: 0,
          paddingLeft: 20
        }}>
        {!selected && <Text color="dark">{brand}</Text>}

        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />

        {selected && (
          <Box>
            <Text color="dark">Size: GG</Text>
          </Box>
        )}

        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>
          <Text color="danger">{selected ? 'remove' : 'Add to cart'}</Text>
        </Box>
      </Box>
    </Touchable>
  )
}
