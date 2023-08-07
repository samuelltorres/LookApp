import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home, Feed, SignIn, SignUp } from './pages/index'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="Marketplace" component={Feed} />
      <Drawer.Screen name="Orders" component={Feed} />
    </Drawer.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Feed"
          component={DrawerComponent}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
