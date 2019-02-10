import { createStackNavigator, createAppContainer } from 'react-navigation'

import {Home} from './containers'

let HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRoute: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        elevation: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }
  }
)

export default createAppContainer(HomeStack)
