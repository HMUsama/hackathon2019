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
        screen: Screens.DashboardCP
    },
    Profile: {
        screen: Screens.ProfileUR
    },
})
const DrawerNavigator = createDrawerNavigator(
    {
    Home: {
        screen: StackNavigator
    },
    Profile: {
        screen: Screens.ProfileUR
    },
    Profile2: {
        screen: Screens.DashboardCP
    }
})

const NavigatorCP = createAppContainer(DrawerNavigator)

export default NavigatorCP 
