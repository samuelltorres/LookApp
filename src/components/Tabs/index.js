import React from 'react'

import { ScrollView, Text, Touchable } from '../index'
import { colors } from '../../styles/theme.json'

const Tabs = ({ tabs = [], active = '', onChange = (tab) => {} }) => {
  const totalTabs = (tabs && tabs.length) || 0
  const activeTabStyle = {
    borderBottomWidth: 3,
    borderColor: colors.primary
  }

  return (
    <ScrollView
      horizontal
      style={{
        maxHeight: 70,
        backgroundColor: colors.light
      }}>
      {tabs?.map((tab) => (
        <Touchable
          key={tab.value}
          onPress={() => onChange(tab.value)}
          hasPadding
          style={[
            {
              minWidth: `${100 / totalTabs}%`,
              alignItems: 'center',
              paddingLeft: 75,
              paddingRight: 75
            },
            active === tab.value ? activeTabStyle : {}
          ]}>
          <Text color={active === tab.value ? 'primary' : undefined}>
            {tab.label}
          </Text>
        </Touchable>
      ))}
    </ScrollView>
  )
}
export default Tabs
