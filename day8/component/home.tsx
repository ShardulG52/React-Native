import React  from 'react';
import { Text, TouchableOpacity, View ,SafeAreaView, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';



function Home(props:any) {

  
  return (
    <SafeAreaView style={style.appConatiner}>
    
      <View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Camera")} style={style.touchable}>
          <Text style ={style.buttonText}>Camera</Text>
        </TouchableOpacity>
      </View>
      
      </SafeAreaView>
  )
}

export default Home;


const style = StyleSheet.create({
  appConatiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey'
  },
  touchable:{
    borderRadius:5,
    borderWidth:2,
    backgroundColor:'black',
    padding:5
  },
  buttonText:{
    color:'white',
    fontSize:40
  }
})