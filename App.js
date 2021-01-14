import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import ChosenVideoScreen from './src/screens/ChosenVideoScreen'

const navigator =createStackNavigator({
  Home: HomeScreen,
  WatchScreen : ChosenVideoScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title:'Home Screen'
  }
})

export default createAppContainer (navigator);