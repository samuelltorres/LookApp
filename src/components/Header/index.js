import React from 'react'
import { SafeAreaView } from 'react-native'
import { Box, Text, Title } from '../../components'
import { colors } from '../../styles/theme.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ title }) => {
  return (
    <Box
      fluid
      height="100px"
      justify="center"
      border={`1px solid ${colors.muted}50`}>
      <SafeAreaView
        style={{
          flexDirection: 'row'
        }}>
        <Box width="80px" justify="center" align="center">
          <Icon name="menu" size={20} />
        </Box>

        <Box align="center" justify="center">
          <Text>{title}</Text>
        </Box>

        <Box b width="80px" />
      </SafeAreaView>
    </Box>
  )
}

export default Header
