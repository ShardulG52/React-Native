import React, { useEffect } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Home(props:any) {

    
  return (
    <SafeAreaView style={style.container}>
        <View style={style.purpleView}>
            <Text style={style.text}>Home Screen</Text>
        </View >
        
            <TouchableOpacity style={style.button} onPress={()=>props.navigation.navigate("Details")}>
            <Text style={style.buttonText}>Get Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button2} onPress={()=>props.navigation.navigate("AddDetails")}>
            <Text style={style.buttonText}>Add</Text>
            </TouchableOpacity>
        
    </SafeAreaView>
  )
}

export default Home

const screenHeight = Dimensions.get('window').height;
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
    button2:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:658,
    },
    
    buttonText:{
        color:'white',
        fontSize:25
    },
    purpleView:{

        justifyContent:'center',
        marginTop:20,
        alignItems:'center', 
        backgroundColor:'#d8c3eb' ,
        width:250,
        borderRadius:10,
        height:screenHeight/3
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    
    
})