import * as Screens from '../screens/User'
import { createDrawerNavigator, 
    createMaterialTopTabNavigator, 
    createStackNavigator, createAppContainer } from "react-navigation";
// import { Avatar } from 'react-native-elements';

const StackNavigator = createStackNavigator({
    // Login: {
    //     screen: Screens.LoginScreen
    // },
    Dashboard: {
        screen: Screens.DashboardUR
    },
    Profile: {
        screen: Screens.ProfileScreen
    },
})
const DrawerNavigator = createDrawerNavigator(
    {
    Dashboard: {
        screen: Screens.DashboardUR
    },
    Home: {
        screen: StackNavigator
    },
    // Profile: {
    //     screen: Screens.ProfileCP
    // },
})

const NavigatorUR = createAppContainer(DrawerNavigator)

export default NavigatorUR 
