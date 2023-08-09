/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {
  Box,
  Button,
  Spacer,
  Text,
  Title,
  Touchable
} from '../../components/index'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StretchyScrollView } from 'react-native-stretchy'
import util from '../../util'
import { colors } from '../../styles/theme.json'
import Picker from '../../components/Picker'

export default function Product() {
  return (
    <>
      <Header
        title="Large striped cardigan"
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="shopping-outline" size={25} color={colors.gray50} />
          </Touchable>
        )}
      />

      <StretchyScrollView
        image={{
          uri: 'https://bonnierpublications.com/app/uploads/2022/05/woman-1.jpg'
        }}
        imageOverlay={<Box background={util.toAlpha(colors.black, 40)} />}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              $1080
            </Title>
          </Box>
        }>
        <Box hasPadding background="light">
          <Text color="black">T-SHIRT</Text>
          <Spacer size="20px" />

          <Title color="black">A.P.C. Collection Spring 2015</Title>
          <Spacer size="30px" />

          <Text color="dark">
            Enjoy the beauty of italian cotton all over your body. This item
            will fit your body and warm you up all over and during spring. This
            item will fit your body and warm you up all over and during spring.
            And over and over again, this is the text.
          </Text>
          <Spacer size="30px" />

          <Picker
            title="size"
            options={[
              { label: 'S', value: 'S' },
              { label: 'M', value: 'M' },
              { label: 'L', value: 'L' },
              { label: 'XL', value: 'XL' }
            ]}
            initialValue="M"
            onChange={(value) => alert('You chose the size ' + value)}
          />
          <Spacer size="30px" />

          <Button block>
            <Text color="light">Add to cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  )
}
