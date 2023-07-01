import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks'

function Camera() {
    const [{cameraRef },{takePicture}] = useCamera();

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
        } catch (error) {
            console.log(error);

        }
    }
  return (
    <View style={{flex:1}}>
        
        <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.front}
        style={style.preview}>
            <View style={{flex:1 , justifyContent:'flex-end', padding:40}}>
        <TouchableOpacity onPress={()=> captureHandle()} style={style.touchable}>
          <Text style ={style.buttonText}>Capture</Text>
        </TouchableOpacity></View>

        </RNCamera>
    </View>
  )
}

export default Camera;


const style = StyleSheet.create({
    preview:{
        height:'100%',
        width:'auto'
    },
    touchable:{
        justifyContent:'center',
        alignItems:'center',
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