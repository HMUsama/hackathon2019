// import React from 'react';
// import { StyleSheet, Text, View,Button,Facebook } from 'react-native';
// import MainNav from './navigation/MainNav'
// import MapUR from './screens/User/MapCP'
// console.disableYellowBox = ['Remote Debugger']

// export default class App extends React.Component {
// constructor(){
//     super();
//     this.state={
//     }
// }
// render() {
//     return (
//       <View style={{flex: 1,backgroundColor:'skyblue',height:200,
//       }}>
//         <MainNav/>
//       </View>
//     );
//   }
// }




import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView,PermissionRequest,Location } from "expo";
import ProfileCP from './screens/User/ProfileCP'


 class App extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    // console.log("Location*******",this.state.location)
    return (
      <View> 
        <ProfileCP/>
    </View>
    );
  }
}

export default App