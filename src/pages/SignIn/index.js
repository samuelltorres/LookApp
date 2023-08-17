import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import api from '../../services/api'

import { Box, Button, Input, Spacer, Text, Title } from '../../components'

export function SignIn({ navigation: { navigate, replace } }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const requestLogin = async () => {
    try {
      if (user.email?.length === 0 || user.password?.length === 0) {
        alert('Fill all field')
        return false
      }

      const { data: users } = await api.get('/users', {
        params: {
          email: user.email?.toLocaleLowerCase(),
          password: user.password
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

      const [loggedUser] = users
      if (!loggedUser) {
        alert('User not founded')
        return false
      }

      console.log(loggedUser)
    } catch (err) {
      console.log(err)
      alert(err.message)
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold variant="big">
          LOOKAPP
        </Title>

        <Spacer size="50px" />
        <Title bold>SignIn my account.</Title>
        <Spacer size="50px" />

        <Input
          placeholder="Email"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <Spacer size="20px" />
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />

        <Spacer size="50px" />
        <Button block onPress={() => requestLogin()}>
          <Text color="light">SignIn into my account</Text>
        </Button>

        <Spacer size="30px" />
        <Text color="gray50" underline onPress={() => navigate('SignUp')}>
          Create new account
        </Text>
      </Box>
    </>
  )
}
