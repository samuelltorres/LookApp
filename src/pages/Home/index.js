import React from 'react'
import { StatusBar } from 'react-native'

import { Text, Title, Button, Box, Spacer } from '../../components'

export function Home({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box justify="center" hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" variant="big" bold>
            LOOKAPP
          </Title>
          <Spacer />

          <Text color="light" align="center" spacing="0px 20px">
            Stay on top of the fashion world and buy your favorite looks.
          </Text>
        </Box>

        <Box align="center" fluid justify="flex-end">
          <Button block onPress={() => navigation.navigate('SignIn')}>
            <Text color="light">SigIn my account</Text>
          </Button>
          <Spacer size="29px" />

          <Text
            onPress={() => navigation.navigate('SignUp')}
            color="light"
            underline>
            Create new account
          </Text>
          <Spacer size="70px" />
        </Box>
      </Box>
    </>
  )
}
