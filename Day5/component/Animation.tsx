import React, { useRef, useState } from 'react'
import {  Animated, Modal, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View, useAnimatedValue } from 'react-native';

interface Anime{

    modalVisible:boolean,
    back:Function
}


function Animation(props:Anime) {

    const value = useRef(new Animated.Value(0)).current;
    const [enable,setEnable] = useState(false);

    
    const handleChange = ()=>{
        
        changeColor();
        setEnable(prev=>!prev)
    };
 
    const changeColor=()=>{
        Animated.timing(value,{
            toValue:1000,
            duration:1000,
            useNativeDriver:false
        }).start();
    }

  return (
    <Modal animationType="fade" visible={props.modalVisible} transparent={false}>
        <SafeAreaView style={style.safeAreaView}> 
        <Animated.View style={[style.container,{backgroundColor:value.interpolate({
            inputRange:[0,1000],
            outputRange:[enable?"#c4a9db":"#765b87",enable?"#765b87":"#c4a9db"]
        })} ]}>
            <Switch value={enable} onValueChange={handleChange}/>
        </Animated.View>

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



