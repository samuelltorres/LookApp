import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import Home from './src/pages/Home'
import SignUp from './src/pages/SignUp'

AppRegistry.registerComponent(appName, () => SignUp)
