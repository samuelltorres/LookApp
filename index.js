import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Home, Feed, SignIn, SignUp } from './src/pages'

AppRegistry.registerComponent(appName, () => Feed)
