import {createStackNavigator,
        createAppContainer } from "react-navigation";
import Main from '../Main/Main'
import LoginUser from '../Main/LoginUser'
import LoginCompany from '../Main/LoginCompany'
import NavigatorUR from './NavigatorUR'
import NavigatorCP from './NavigatorCP'



const StackNavigator = createStackNavigator({
    Main: {
        screen: Main
    },
    LoginUser: {
        screen: LoginUser
    },
    LoginCompany: {
        screen: LoginCompany
    },
    NavigatorUR: {
        screen: NavigatorUR
    },
    NavigatorCP: {
        screen: NavigatorCP
    },
})


const MainNav = createAppContainer(StackNavigator)

export default MainNav;
