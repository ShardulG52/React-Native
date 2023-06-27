import React from 'react'

import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'

function Setting(props:any) {
  return (
    <SafeAreaView style={style.container}>
        <View>
            <Text>This is Setting Screen</Text>
        </View>
        <TouchableOpacity style={style.button} onPress={()=>props.navigation.navigate("Home")}>
            <Text style={style.buttonText}>Back To Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Setting;

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:598,
    },
    buttonText:{
        color:'white',
        fontSize:25
    }
    
})