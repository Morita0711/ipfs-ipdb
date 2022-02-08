import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-get-random-values'
import '@ethersproject/shims/dist/index'
import './global.js'
import unorm from 'unorm'
String.prototype.normalize = function (form) {
  var func = unorm[(form || 'NFC').toLowerCase()]
  if (!func) {
    throw new RangeError('invalid form - ' + form)
  }
  return func(this)
}

// import './shim'
// import { ethers } from 'ethers';
import { theme } from './src/core/theme'
import {
  StartScreen,
  Signin,
  Signup,
  Dashboard,
  PlaceOrder,
  Recover,
  Nft_btc,
} from './src/screens'

import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

const Stack = createStackNavigator()

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Recover" component={Recover} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Nft_btc" component={Nft_btc} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ReduxProvider>
  )
}
