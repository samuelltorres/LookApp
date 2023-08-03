/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Box, Title, Touchable } from '../../components'
import { colors } from '../../styles/theme.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ title }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box
        fluid
        height="80px"
        justify="center"
        border={`1px solid ${colors.muted}50`}>
        <SafeAreaView
          style={{
            flexDirection: 'row'
          }}>
          <Touchable
            width="90px"
            justify="center"
            align="center"
            onPress={() => alert('test')}>
            <Icon name="menu" size={30} />
          </Touchable>

          <Box align="center" justify="center">
            <Title>{title}</Title>
          </Box>

          <Touchable width="90px" />
        </SafeAreaView>
      </Box>
    </>
  )
}

export default Header
