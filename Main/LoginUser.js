import React from 'react';
import {  Text, View,Button } from 'react-native';
// import console = require('console');

export default class LoginUser extends React.Component {
        constructor(){
            super();
            this.state={
            }
        }
Login(){
    console.log("Dashboard User")
    this.props.navigation.navigate("NavigatorUR")
    // Facebook.logInWithReadPermissionsAsync(2300696260214340, {
    //   permissions: ['public_profile', 'email'],
    // }).then(res => {
    //   console.log('Responce', res);
    // });
}
 render() {
    return (
      <View style={{flex: 1,backgroundColor:'skyblue',
        height:200 }}>
        <Text>Login With FaceBook</Text>
        <Button
        title="Go To SignIn"
        color="#841584"
        onPress={this.Login.bind(this)} 
        />
      </View>
    );
  }
}