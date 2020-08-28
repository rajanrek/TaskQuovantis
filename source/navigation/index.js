import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../homeScreen';
import launchScreen from '../homeScreen/launchScreen';

const AppNavigator = createSwitchNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    launch: {
      screen: launchScreen,
    },
  },
  {
    initialRouteName: 'launch',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
