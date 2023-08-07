import React from 'react'
import { View } from 'react-native'
import { SafeAreaView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../styles/theme.json'
import { Box, Title, Touchable } from '../../components'
import util from '../../util'

const Header = ({ title = 'Explore', right = null }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: util.toAlpha(colors.muted, 50),
        backgroundColor: colors.light
      }}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Touchable
          width="70px"
          justify="center"
          align="center"
          hasPadding
          onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} />
        </Touchable>

        <Box align="center" justify="center">
          <Title>{title}</Title>
        </Box>

        {right ? right() : <Touchable hasPadding width="70px" />}
      </SafeAreaView>
    </View>
  )
}

export default Header
