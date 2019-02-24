import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView,PermissionRequest,Location } from "expo";


 class MapUR extends React.Component {
  constructor(){
    super()
    this.state={
      location:null
    }
  }
componentDidMount(){
  _getLocationAsync();   
}
_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }else{
    alert("Dont Have Permission")
  }
}
  render() {
    console.log("Location*******",this.state.location)
    return (
      <View> 
      {
        this.state.location ? 
        <MapView
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      /> :<Text>Loading</Text>
      }
    </View>
    );
  }
}

export default MapUR