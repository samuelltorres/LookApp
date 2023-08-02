import React from 'react'
import { Box, Button, Input, Spacer, Text, Title } from '../../components'

const SignUp = () => {
  return (
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
      <Button block>
        <Text color="light">Create new account</Text>
      </Button>

      <Spacer size="30px" />
      <Text color="gray50" underline onPress={() => alert('a')}>
        Back to signIn
      </Text>
    </Box>
  )
}

export default SignUp
