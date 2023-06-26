import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";

import Login from "./component/Login";
import Register from "./component/Register";
import Animation from "./component/Animation";


function App(){

const[visibleModal,setModalVisible] = useState(false);
const login=()=>{
setModalVisible(true);
}
const back=()=>{
  setModalVisible(false);
}
const[visibleModal2,setModalVisible2] = useState(false);
const  anime = ()=>{
  setModalVisible2(true);
}
const  back2 = ()=>{
  setModalVisible2(false);
}


  return (
    <SafeAreaView>
    <View>
      <Login login={login} anime={anime}/>
      <Register modalVisible={visibleModal} back={back}/>
      <Animation modalVisible={visibleModal2} back={back2} />
    </View>
    </SafeAreaView>
  )
}

export default App;