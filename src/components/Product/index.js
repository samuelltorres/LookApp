import React from 'react'

import { Text, Touchable, Cover, Box, Spacer } from '../index'

export default function Product({ cover, brand, title, price }) {
  return (
    <Touchable hasPadding row background="light" spacing="0 0 1px 0">
      <Cover width="80px" height="80px" image={cover} />
      <Box
        hasPadding
        style={{
          paddingBottom: 0,
          paddingTop: 0
        }}>
        <Text color="dark">{brand}</Text>
        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />
        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>
          <Text color="danger">Add to cart</Text>
        </Box>
      </Box>
    </Touchable>
  )
}
