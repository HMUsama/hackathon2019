
export const joinCircle = (code) =>{
    console.log("CIRCLE ACTIONS____________________________",code)
    return (dispatch,getState,{getFirebase,getFirestore})=>{
  //     console.log("Circle dispatch--------------------------------" )
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",Code )
        console.log("----------------->>>>>>>>>>>>",code.JCode)
        console.log("-----------------",code.userInfo)
              const Code = code.JCode
              console.log("-----------------<<<<<<<<<<<<<<<",Code)
              const ID= code.userInfo.ID
              console.log("-----------------***************",ID)
       const firebase = getFirebase();
       const firestore = getFirestore();

       firestore.collection("circle").doc().collection("members").doc(ID).set({
         ID:code.userInfo.ID,
         Name:code.userInfo.Name,
         Picture:code.userInfo.Picture,
         Location:code.userInfo.location
       })

    //    firestore.collection("circle")
    //   //  .doc("ID","==",ID)
    //    .where("ID","==","ID").add({

    //    })
    .then(()=>{
       alert("SuccessFull Add Member");
     }).catch((error)=>{
       alert("Wrong Code");
     })
  }
}

