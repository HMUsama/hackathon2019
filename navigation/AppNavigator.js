import * as Screens from '../screens'
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

const Navigator = createAppContainer(DrawerNavigator)

export default Navigator 
