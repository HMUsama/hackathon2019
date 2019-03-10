import React from 'react';
import { StyleSheet, Text, View,FlatList ,AsyncStorage, ScrollView  } from 'react-native'
import { Header ,Input,Button,Avatar ,ListItem,List,} from 'react-native-elements'
import BackButton from '../components/button/BackButton'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Location } from 'expo';

 class MyCircle extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }

  renderList(){
   
    <ScrollView scrollEventThrottle={16}>
       <View style={styles.container}>
                                <Text>pakistan</Text>
                            </View>
    <View>
        <View>

                    <ListItem
                        // key={i}
                        // leftAvatar={{ source: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNYd1Tiv0zjbY9Ggn8Mz_wruAjyoueuvX257D_NE4LXnG9SqY' } }}
                        title={"l.name"}
                        subtitle="Admin"
                        
                    />
        </View>


    </View>
</ScrollView >
  }
  render() {
    return (
      <View>
          <Header centerComponent={{ text: 'My Circle ', style: { color: '#fff'  } }}/>
            <BackButton navigation={this.props.navigation}/>
             {this.renderList()}

      </View>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
  console.log("STATE_______________________^^^^^^^^***********^^^^^^^_",state.firestore.data.Users.Picture)
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
                          {collection:"member"}
                      ]))
                      (MyCircle);
// export default MyCircle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D8631',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
