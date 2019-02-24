import React from 'react';
import { StyleSheet, Text, View,Button,Facebook } from 'react-native';
import MainNav from './navigation/MainNav'
import MapUR from './screens/User/MapCP'
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
        {/* <Navigator /> */}
        {/* <MainNav/> */}
        <MapUR/>
      </View>
    );
  }
}