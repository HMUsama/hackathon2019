import {createStackNavigator,
        createAppContainer } from "react-navigation";
import Main from '../Main/Main'
import LoginUser from '../Main/LoginUser'
import LoginCompany from '../Main/LoginCompany'
import Navigator from './AppNavigator'


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
    Navigator: {
        screen: Navigator
    },
})


const MainNav = createAppContainer(StackNavigator)

export default MainNav;
