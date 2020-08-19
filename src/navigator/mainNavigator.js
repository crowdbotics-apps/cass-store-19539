import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp2891844Navigator from '../features/SignUp2891844/navigator';
import BlankScreen590233Navigator from '../features/BlankScreen590233/navigator';
import BlankScreen490228Navigator from '../features/BlankScreen490228/navigator';
import BlankScreen390227Navigator from '../features/BlankScreen390227/navigator';
import BlankScreen290226Navigator from '../features/BlankScreen290226/navigator';
import BlankScreen190225Navigator from '../features/BlankScreen190225/navigator';
import BlankScreen090224Navigator from '../features/BlankScreen090224/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp2891844: { screen: SignUp2891844Navigator },
BlankScreen590233: { screen: BlankScreen590233Navigator },
BlankScreen490228: { screen: BlankScreen490228Navigator },
BlankScreen390227: { screen: BlankScreen390227Navigator },
BlankScreen290226: { screen: BlankScreen290226Navigator },
BlankScreen190225: { screen: BlankScreen190225Navigator },
BlankScreen090224: { screen: BlankScreen090224Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
