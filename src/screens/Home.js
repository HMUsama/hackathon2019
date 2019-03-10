import React from 'react';
import { StyleSheet, Text, View,Button,Platform ,Linking,Dimensions,AppState,AsyncStorage} from 'react-native'
import { Header } from 'react-native-elements'
import MenuButton from '../components/button/MenuButton'
import Modal from 'react-native-modal'
import {  MapView, Permissions, Location,Constants,IntentLauncherAndroid} from 'expo'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
// import {Location} from '../store/actions/LocationAction'

 class Home extends React.Component {
  constructor(){
    super()
    this.state={
      location:'',
      latitude:'',
      longitude:'',
    }
  }
   componentDidMount() {
    console.log("======================================================================================");
    
    this._getLocationAsync();

  }

  _getLocationAsync = async () => {

        let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        
        let location = await Expo.Location.getCurrentPositionAsync({});
        console.log("===================================================================================_getLocationAsync===");
        // this.setState({ location, condition: true });
        console.log('current location================', location)

        Location.watchPositionAsync({ distanceInterval: 1 }, (coords) => {
            console.log('current location===+++++++++++', coords)
            // db.collection("users").doc(usid).update({location, latitude: location.coords.latitude, longitude: location.coords.longitude})
            this.setState({ loca: true,location: coords, latitude: location.coords.latitude, longitude: location.coords.longitude })
            // this.ac()
            // this.componentDidMount()
            // this.componentWillMount()
        });


    };
  
  Button = async () =>{  
    this.props.navigation.navigate("Home")
  }
  render() { 
    return (
      <View style={styles.container}>
       <Header
        centerComponent={{ text: 'Family', style: { color: '#fff'  } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <MenuButton navigation={this.props.navigation}/>
      {/* <Text>{text}</Text> */}
      <MapView
          style={{ flex: 1,width:"100%",height:100 }}
          initialRegion={{
            latitude:24.8762,
            longitude: 67.0233,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            title:"Pak",
          }}
        >
          {/* User marker */}
          {this.state.loca &&
            <MapView.Marker
              coordinate={this.state.location.coords}
              title={"Pak"}
            />
          } 
     
     
      </MapView> 
      
      </View>
    );
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     Location:(CurrentLocation) => dispatch(Location(CurrentLocation))
//   }
// }

const mapStateToProps=(state,ownProps)=>{
    // console.log("STATE_______________________^^^^^^^^***********^^^^^^^_",state.firestore.ordered.Users)
    // console.log("OWN STATE+++++++++++++++++++++++++++++++++++++++++",ownProps)
    // const id = ownProps.navigation.state.key;
    // const users = state.firestore.data.Users;
    // const user = users ? users : null
  // console.log("ID+++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>",users)
  // console.log("ID+++++++++++++++++++++++++++++++++++++++++",user)
  return {
      // User:user
  }
}
export default compose(connect(mapStateToProps),
                        firestoreConnect([
                            {collection:"Business"}
                        ]))
                        (Home);
// export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33865d',
    // width:420,
    // height:520,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92C9EB',
  },
  Button:{
    marginTop:120,
    color:'white',
  },
});
