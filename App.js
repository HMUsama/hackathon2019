import React from 'react';
import { StyleSheet, Text, View,Button,Facebook } from 'react-native';
import MainNav from './navigation/MainNav'
console.disableYellowBox = ['Remote Debugger']

export default class App extends React.Component {
constructor(){
    super();
    this.state={
    }
}
render() {
    return (
      <View style={{flex: 1,backgroundColor:'skyblue',height:200,
      }}>
        {/* <Text style={{textAlign:'center', fontSize:40,}}>services provider app</Text> */}
        {/* <Navigator />
        {dash==true && <Dash press={this.check}/>} */}
        <MainNav/>
      </View>
    );
  }
}