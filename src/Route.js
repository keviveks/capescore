import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import MatchScreen from './screens/MatchScreen';
import SettingScreen from './screens/SettingScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Match: {
    screen: MatchScreen,
    navigationOptions: {
      title: 'Match'
    }
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Settings'
    }
  }
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'CapeScore',
    headerStyle: {
      backgroundColor: '#019ae8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  }
});
