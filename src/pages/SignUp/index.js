import React from 'react'
import { Box, Button, Input, Spacer, Text, Title } from '../../components'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  const { navigate, goBack } = useNavigation()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title color="dark" bold>
          Create new account.
        </Title>
        <Spacer size="7px" />
        <Text color="gray50">Enter your details below:</Text>

        <Spacer size="50px" />

        <Input placeholder="Name" />
        <Spacer size="20px" />
        <Input placeholder="Email" />
        <Spacer size="20px" />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="50px" />
        <Button block onPress={() => navigate('SignIn')}>
          <Text color="light">Create new account</Text>
        </Button>

        <Spacer size="30px" />
        <Text color="gray50" underline onPress={() => goBack()}>
          Back
        </Text>
      </Box>
    </>
  )
}
