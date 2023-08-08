import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

import { Home, Feed, SignIn, SignUp } from './pages/index'
import Marketplace from './pages/Marketplace'
import Category from './pages/Marketplace/category'
import Product from './pages/Marketplace/product'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from './styles/theme.json'
import util from './util.js'
import { Title } from './components'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerComponent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Title bold color="light" variant="big" hasPadding>
        LOOKAPP
      </Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

function DrawerComponent() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: util.toAlpha(colors.primary, 80),
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor: util.toAlpha(colors.light, 60),
        drawerStyle: {
          backgroundColor: colors.midnightblue
        }
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="people" color={color} size={28} />
          )
        }}
        name="Feed"
        component={Feed}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Icon name="tag" color={color} size={28} />
        }}
        name="Marketplace"
        component={Marketplace}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="basket" color={color} size={28} />
          )
        }}
        name="Orders"
        component={Feed}
      />
    </Drawer.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Category"
          component={Category}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Product"
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
