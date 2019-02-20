import React from 'react';
import {  Text, View,Button } from 'react-native';

export default class LoginCompany extends React.Component {
constructor(){
    super();
    this.state={
    }
}
Login(){
  console.log("Dashboard Company")
  // this.props.navigation.navigate("NavigatorUR")
}
  render() {

    return (
      <View style={{flex: 1,backgroundColor:'skyblue',
        height:200 }}>
        <Text>Login With FaceBook</Text>
        <Button
        title="Go To SignIn"
        color="#841584"
        onPress={this.Login} 
        />
      </View>
    );
  }
}