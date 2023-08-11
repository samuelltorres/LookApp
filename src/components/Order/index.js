import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { Box, Spacer, Text, Title } from '../index'
import { colors } from '../../styles/theme.json'
import util from '../../util'
const Order = () => {
  return (
    <>
      <Box
        border={`1px solid ${util.toAlpha(colors.muted, 50)}`}
        radius="5px"
        spacing="0 0 10px 0"
        fluid>
        <Box
          row
          hasPadding
          width="100%"
          justify="space-between"
          style={{
            borderColor: util.toAlpha(colors.muted, 50),
            borderBottomWidth: 1
          }}>
          <Box row align="center">
            <Icon name="clock" size={16} color={colors.warning} />
            <Text color="warning" spacing="0 0 0 7px" variant="small">
              IN PROGRESS
            </Text>
          </Box>
          <Text variant="small">May 13, 2016 5:08 PM</Text>
        </Box>

        <Box
          hasPadding
          fluid
          style={{
            borderColor: util.toAlpha(colors.muted, 50),
            borderBottomWidth: 1
          }}>
          <Title color="dark">Order №1947034</Title>
          <Spacer />
          <Text>
            Tracking Number:{' '}
            <Text color="dark" bold>
              IW3475453455
            </Text>
          </Text>
        </Box>

        <Box hasPadding row fluid justify="space-between">
          <Box>
            <Text variant="small">VALUE OF ITEMS</Text>
            <Text bold color="dark">
              $80.58
            </Text>
          </Box>

          <Box>
            <Text variant="small">QUANTITY</Text>
            <Text bold color="dark">
              20 pairs
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Order
