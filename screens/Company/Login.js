// In App.js in a new project
import React from "react";
import { View, Text, Button,TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation'


export default class Login extends React.Component {

  navigate() {

    // this.props.navigation.navigate("Dashboard")
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Dashboard' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }



 logIn=async()=> {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('374883879972328', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
      {this.props.navigation.navigate("Dashboard")}    }
  }

  render() {
    return (
      <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={this.logIn}>Login Screen</Text>

        <Button
        title="SignIn with faceook"
        color="#841584"
        onPress={this.logIn} 
        />
      </View>
    );
  }
}