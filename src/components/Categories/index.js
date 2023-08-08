import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Touchable, Cover, Title, Text, Spacer, Box } from '..'

import util from '../../util'
import { colors } from '../../styles/theme.json'

export default function Category({ title, description }) {
  const { navigate } = useNavigation()

  return (
    <Touchable
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0"
      onPress={() => navigate('Category')}>
      <Cover
        width="100%"
        height="100%"
        image="https://bonnierpublications.com/app/uploads/2022/05/woman-1.jpg">
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 50)}>
          <Title color="light" bold>
            {title}
          </Title>
          <Spacer />
          <Text color="light">{description}</Text>
        </Box>
      </Cover>
    </Touchable>
  )
}
