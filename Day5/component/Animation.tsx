import React from 'react'
import {  Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Anime{

    modalVisible:boolean,
    back:Function
}
function Animation(props:Anime) {

  return (
    <Modal animationType="fade" visible={props.modalVisible} transparent={false}>
        <SafeAreaView style={style.safeAreaView}> 
        <View style={style.container}>
        <TouchableOpacity style={style.button2} >
            <Text style={style.buttonText}>Change Color</Text>
            </TouchableOpacity>  
        </View>

        <TouchableOpacity style={style.button} onPress={()=>props.back()}>
            <Text style={style.buttonText}>Back</Text>
            </TouchableOpacity>        
        </SafeAreaView>
        </Modal>
  )
}

export default Animation;

 const style = StyleSheet.create({
    safeAreaView:{
        height:'100%'
    },

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c4a9db'

    },
    button:{
        backgroundColor:'#4f1d7a',
        alignSelf:'center',
        alignItems:'center',
        width:'33%',
        height:30,
        borderRadius:15,
        
    },
    button2:{
        backgroundColor:'#4f1d7a',
        alignSelf:'center',
        alignItems:'center',
        width:'50%',
        height:30,
        borderRadius:15,
        
    },
    buttonText:{
        color:'white',
        fontSize:25
    },

 })