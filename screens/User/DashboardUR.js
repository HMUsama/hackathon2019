import React from "react";
import Map from './MapCP'
import { View, Text, Button,TextInput , TouchableOpacity} from "react-native";
import {ImagePicker , Permissions} from 'expo';

console.disableYellowBox = ['Remote Debugger']

   const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', 
    title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class DashboardUR extends React.Component {
  constructor(props){
    super();
      this.state={
      company:false,
      token:false,
      // avatarSource: null
      }
  this.check=this.check.bind(this);
}

  check(){
    alert('please wait')
    // const {name,number,services,image}=this.state;
    
  //  if( firestore.collection('user').add({
  //        Number: number,
  //        Name:name,
  //        Services:services,
  //        Image:image
        
  //      })){this.setState({company:false})}      
}

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }



_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  alert(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
    alert(result.uri);
  }
};





 render() {
  //  const {company,token}= this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Dashboard </Text>
      
       <View>
        <Text>Phone Numebr :</Text>
         <TextInput onChangeText={(number) => this.setState({number})} placeholder='Number' style={{backgroundColor:'lightgrey',width:200,}}/>
        <Text></Text>
       
        <Text>Name :</Text>
         <TextInput onChangeText={(name) => this.setState({name})}  placeholder='name' style={{backgroundColor:'lightgrey',width:200,}}/>
        <Text></Text>
       
        <Text>services :</Text>
         <TextInput onChangeText={(services) => this.setState({services})} placeholder='servicer' style={{backgroundColor:'lightgrey',width:200,}}/>
        <Text></Text>

    <TouchableOpacity onPress={this._pickImage} style={{backgroundColor:'green',margin:10,padding:10}} >
      <Text  style={{color:'white'}}>select image</Text>
    </TouchableOpacity>
      
        <Button title="submit" onPress={this.check}/>
        </View>

 <Map/>
{/* // main */}
      </View>
    );
  }
}


// async function uploadImageAsync(uri) {
//   const blob = await new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//       resolve(xhr.response);
//     };
//     xhr.onerror = function(e) {
//       console.log(e);
//       reject(new TypeError('Network request failed'));
//     };
//     xhr.responseType = 'blob';
//     xhr.open('GET', uri, true);
//     xhr.send(null);
//   });
//   console.log('this is blob =>>', blob)

//   const ref = firebase.storage().ref().child("images/"+Math.random().toString().substring(2,6))
//   const snapshot = await ref.put(blob);

// const url= snapshot.ref.getDownloadURL();
// console.log('this url ==>>', url)
//   // blob.close();


//   return await snapshot.ref.getDownloadURL();
// }