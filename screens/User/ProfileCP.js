import React from "react"
import { View, Text,ScrollView,Image,Animated } from "react-native"



HEADER_MAX_HEIGHT=120
HEADER_MIN_HEIGHT=70
PROFILE_IMAGE_MAX_HEIGHT=80 
PROFILE_IMAGE_MIN_HEIGHT=40


 class ProfileCP extends React.Component {
   constructor(){
     suprer()
     this.state={
       scrollY : new Animated.Value(0)
     }
   }
  render() {
    const headerHeight= this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange:[HEADER_MAX_HEIGHT , HEADER_MIN_HEIGHT],
      extrapolate:"clamp"
    })
    const profileImageHeight= this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange:[PROFILE_IMAGE_MAX_HEIGHT , PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate:"clamp"
    })
    const profileImageMarginTop= this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange:[HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2) ,
        HEADER_MAX_HEIGHT+5],
      extrapolate:"clamp"
    })
    const headerZindex= this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT +5+ PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT +5+ PROFILE_IMAGE_MIN_HEIGHT+26
    ],
      outputRange:[-20,-20,-20,0],
      extrapolate:"clamp"
    })
    const headerTitleBottom= this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange:[0,1],
      extrapolate:"clamp"
    })
    return (
      <View style={{ flex: 1 }}>
      <Animated.View style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          backgroundColor:'lightskyblue',
          height:headerHeight,
          zIndex:headerZindex,
          alignItems:'center',
         }}>
         <Animated.View style={{position:'absolute',bottom:headerTitleBottom}}>
         <Text style={{fontSize:14,fontWeight:"bold"}}>Usama</Text>
         </Animated.View>
      </Animated.View>
      <ScrollView style={{flex:1}}
      interpolate={16}
          onScroll={Animated.event(
            [{nativeEvent:{contentDffset:{y:this.state}}}]
          )}
      >
      <View style={{
            height:profileImageHeight,
            width:profileImageHeight,
            borderRadius:PROFILE_IMAGE_MAX_HEIGHT,
            borderColor:'white',
            borderWidth:3,
            overflow:"hidden",
            marginTop:profileImageMarginTop,
            marginLeft:10
      }}>
         <Image source={require('../../assets/icon.png')}
         style={{flex:1,width:null,height:null}}></Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:26,paddingLeft:10}}>Usama</Text>
      </ScrollView>
      </View>
    );
  }
}

export default ProfileCP