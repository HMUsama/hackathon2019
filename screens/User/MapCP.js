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
    this._getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }else{
      alert("Dont Have Permission")
    }
  }
}
 
  render() {
    return (
      <View> 
      {
        this.state.location ? 
        <MapView
        initialRegion={{
          latitude: this.state.location.coodrds.latitude,
          longitude: this.state.location.coodrds.longitude,
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