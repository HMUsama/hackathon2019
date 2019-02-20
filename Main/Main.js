import React from 'react';
import { StyleSheet, Text, View,Button,Facebook } from 'react-native';

export default class Main extends React.Component {
constructor(){
    super();
    this.state={
    }
}

NavUser(){
  this.props.navigation.navigate("LoginUser")
}
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'skyblue',
        height:200 }}>
        <Text color="#841584">Are You User</Text>
        <Button
          title="Go To SignIn"
          color="#841584"
          onPress={this.NavUser.bind(this)} 
        />
        <Text>Are You User</Text>
        <Button
        title="Go To SignIn"
        color="#841584"
        onPress={this.logIn} 
        />
      </View>
    );
  }
}