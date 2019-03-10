
export const createCircle = (circle) =>{
    // console.log("CIRCLE ACTIONS",circle)
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle )
        // const CircleName= circle.text
        // const Name =circle.Name
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle.userInfo.Name )
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle.userInfo.ID )
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle.Circle_key)
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle.userInfo.Picture )
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle.userInfo.location )
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",circle.circle )
        // const ID=circle.userInfo.ID 
        const firebase = getFirebase();
        const firestore = getFirestore();

        firestore.collection("circle").doc().add({
          ID:circle.userInfo.ID,
          Key:circle.Circle_key,
          Circle:circle.circle,
          Name:circle.userInfo.Name,
          Picture:circle.userInfo.Picture,
          Location:circle.userInfo.location
          // Key:circle.Key,
     }).then(()=>{
       alert("SuccessFull Create Circle");
      //  this.props.navigation.navigate("Home")
        //  dispatch({type:"USER_DETAILS_SUCCESS"})
     }).catch((error)=>{
      alert("Try Again");
        //  dispatch({type:"USER_DETAIL_ERROR",error});
     })
      }
    }
        
        // alert("SuccessFull Create Circle")
