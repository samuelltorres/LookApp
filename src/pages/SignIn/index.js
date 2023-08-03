import React from 'react'
import { Box, Button, Input, Spacer, Text, Title } from '../../components'
import { StatusBar } from 'react-native'

export function SignIn() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold variant="big">
          LOOKAPP
        </Title>

        <Spacer size="50px" />
        <Title bold>SignIn my account.</Title>
        <Spacer size="50px" />

        <Input placeholder="Email" />
        <Spacer size="20px" />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="50px" />
        <Button block>
          <Text color="light">SignIn into my account</Text>
        </Button>

        <Spacer size="30px" />
        <Text color="gray50" underline onPress={() => {}}>
          Create new account
        </Text>
      </Box>
    </>
  )
}
