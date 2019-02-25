import React from "react"
import { Image, Button, View } from "react-native"
import { ImagePicker } from "expo"

console.disablYellowBox = ['Remote Debugger']

const defaultState={
  values:{
    number:'',
    pictureUrl:''
  },
  error:{},
  isSumitting:false
}

 class AddServices extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     pictureUrl:'',
  //     number:''
  //   }
  // }
  state=defaultState;
  
  submit=async ()=>{
      if(this.state.isSumitting){
        return;
      }
      this.setState({isSumitting:true});

  }
  onChangeText=(key,value)=>{
    this.setState(state=>({
      values:{
        ...state.values,
        [key]:value,
      },
    }));
  };
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
      if (!result.cancelled) {
      this.onChangeText('pictureUrl', result.uri );
    }
    //   if (!result.cancelled) {
    //   this.setState({ image: result.uri });
    // }
  };
  render() {
    const {error,values:{number,pictureUrl}} = this.state;
    return (
      <View style={{flex:1,display:flex,justifyContent:'center',alignItems:'center'}}>
        <View style={{width:200}}> 
        <TextField value={number} 
          name="number"onChangeText={this.onChangeText}>
        <Button title='Pick an Image From Camera Roll'onPress={this.pickImage}/>
      {
        pickImage ?(
          <Image source={{uri:pictureUrl}} style={{width:200,height:200}}/>
        ):null
      }
      <Button title="Add Services"onPress={this.submit}/>
        </TextField>
        </View>
      </View>
    );
  }
}

export default AddServices