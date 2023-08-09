import React from 'react'
import { View } from 'react-native'
import { SafeAreaView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../styles/theme.json'
import { Box, Text, Touchable } from '../../components'
import util from '../../util'

const Header = ({ title = 'Explore', right = null, goBack = false }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: util.toAlpha(colors.muted, 50)
        // backgroundColor: colors.light
      }}>
      <StatusBar barStyle="light-content" />

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
          onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}>
          <Icon
            name={!goBack ? 'menu-outline' : 'chevron-back-outline'}
            size={25}
            color={colors.gray50}
          />
        </Touchable>

        <Box align="center" justify="center">
          <Text bold color="black">
            {title}
          </Text>
        </Box>

        {right ? right() : <Touchable hasPadding width="70px" />}
      </SafeAreaView>
    </View>
  )
}

export default Header
