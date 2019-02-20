import * as Screens from '../screens/Company'
import { createDrawerNavigator, 
    createMaterialTopTabNavigator, 
    createStackNavigator, createAppContainer } from "react-navigation";
// import { Avatar } from 'react-native-elements';

const StackNavigator = createStackNavigator({
    // Login: {
    //     screen: Screens.LoginScreen
    // },
    Dashboard: {
        screen: Screens.DashboardScreen
    },
    Profile: {
        screen: Screens.ProfileScreen
    },
})
const DrawerNavigator = createDrawerNavigator(
    {
    Home: {
        screen: StackNavigator
    },
    Profile: {
        screen: Screens.ProfileScreen
    },
    Profile2: {
        screen: Screens.DashboardScreen
    }
})

const NavigatorCP = createAppContainer(DrawerNavigator)

export default NavigatorCP 
