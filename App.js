import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createAppContainer, createStackNavigator  } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import DeleteScreen from './src/screens/DeleteScreen';
import TemporarySearchScreenDisplay from './src/screens/TemporarySearchScreenDisplay';
import DisplayScreen from './src/screens/DisplayScreen'
import EditScreen from './src/screens/EditScreen';
import DispSingleUserContent from './src/screens/DispSingleUserContent';
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Home: HomeScreen,
    Create:CreateScreen,
    Edit:EditScreen,
    Delete:DeleteScreen,
    tempSearch: TemporarySearchScreenDisplay,
    Display: DisplayScreen,
    DisplaySingleContent: DispSingleUserContent
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "UpCaliber"
    }
  }
);

export  default createAppContainer(navigator);