import React from 'react'
import { Box, Button, Spacer, Text, Title, Cover } from '../index'

const CongratsModal = () => {
  return (
    <Box
      background="light"
      haspadding
      justify="center"
      align="center"
      style={{
        position: 'absolute',
        zIndex: 999,
        width: '100%',
        height: '100%'
      }}>
      <Cover
        width="160px"
        height="160px"
        background="transparent"
        source={require('../../assets/check-circle.png')}
      />
      <Spacer size="20px" />

      <Title>Congratulations!</Title>
      <Spacer />
      <Text>Your items are on the wayand should arrive shortly</Text>
      <Spacer size="180px" />

      <Button style={{ width: '91%' }} onPress={() => {}}>
        <Text color="light">Track your order</Text>
      </Button>
    </Box>
  )
}

export default CongratsModal
