/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { Box, Spacer, Text, Touchable } from '../index'
import { colors } from '../../styles/theme.json'

const Picker = ({
  title,
  options = [],
  initialValue = '',
  onChange = (value) => {}
}) => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(initialValue)
  }, [])

  return (
    <>
      <Text color="black" bold>
        {title}
      </Text>

      <Spacer />

      <Box row fluid height="50px">
        {options?.map((opt) => (
          <Touchable
            onPress={() => {
              setSelected(opt?.value)
              onChange(opt?.value)
            }}
            style={[
              styles.base,
              styles[selected === opt.value ? 'checked' : 'unchecked']
            ]}>
            <Text
              style={selected === opt.value ? styles.textChecked : undefined}>
              {opt.label}
            </Text>
          </Touchable>
        ))}
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  base: {
    maxWidth: 40,
    height: 40,
    marginRight: 10,

    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,

    justifyContent: 'center',
    alignItems: 'center'
  },
  unchecked: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.muted
  },
  checked: {
    backgroundColor: colors.primary
  },
  textChecked: {
    color: colors.light
  }
})

export default Picker
