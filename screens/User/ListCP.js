// In App.js in a new project
import React from "react";
import { View, Text, Button,Facebook,TextInput,Label,  } from "react-native";
// console.disableYellowBox = ['Remote Debugger']
 class ListCP extends React.Component {
constructor(){
      super();
    this.state={
    }
}

chal(){this.props.navigation.navigate("Login")}

logIn =async()=> {

    const {login} = this.state;
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('374883879972328', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
 this.setState({login: true})
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <View>
        <Text>Name :</Text>
         <TextInput  placeholder='Name' style={{backgroundColor:'lightgrey',width:100,}}/>
        <Text></Text>

        <Text>Email</Text>
         <TextInput onChangeText={(text1) => this.setState({text1})} placeholder='email' style={{backgroundColor:'lightgrey',width:100}}/>
          <Text></Text>

          <Text>Password</Text>
         <TextInput onChangeText={(text2) => this.setState({text2})} placeholder='pas' style={{backgroundColor:'lightgrey',width:100}}/>
         <Text></Text>

        </View>

        <Button 
        title="Login"
        color="#841584"
        onPress={this.chal.bind(this)} />
      </View>
    );
  }
}


export default ListCP