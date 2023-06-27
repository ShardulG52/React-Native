
import React, { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



function Register(props:any){

    

    return (   
        
        <SafeAreaView style={style.safeAreaView}>

            <View style={style.container}>
            
            <View style={style.purpleView}>
            <Text style={style.loginText}> Register</Text>
            <View >
            <Image source={{uri:'https://omreels.in/wp-content/uploads/2022/03/Om-hd-wallpapers-1080p-for-mobile.jpg'}} style={[style.image,{marginRight:10}]}></Image>
            <TouchableOpacity >
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/45/45010.png'}} style={style.camera}></Image>
            </TouchableOpacity>
            </View>
            <View style={style.inputView}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/149/149995.png'}} style={[style.mobileLogo ,{marginRight:10}]}></Image>

            <TextInput placeholder="User Name" style={style.textInput}></TextInput>
            </View>
            <View style={style.inputView}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/8105/8105423.png'}} style={[style.mobileLogo ,{marginRight:10}]} ></Image>

            <TextInput placeholder="Address" style={style.textInput}></TextInput>
            </View>
            <View style={style.inputView}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/0/191.png'}} style={[style.mobileLogo ,{marginRight:10}]}></Image>

            <TextInput placeholder="Mobile Number" style={style.textInput}></TextInput>
            </View>
            </View>
            <TouchableOpacity style={style.button} onPress={()=>props.navigation.navigate("Login")}>
            <Text style={style.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
       
    )

}

export default Register;

const style = StyleSheet.create({

    safeAreaView:{
        height:'100%'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    imageLogo:{
        height:100,
        width:250,
     }, 
     purpleView:{

        marginTop:20,
        alignItems:'center', 
        backgroundColor:'#d8c3eb' ,
        width:250,
        borderRadius:10,
    },
    loginText:{
        fontWeight:'bold',
        fontSize:40,
        color:'#a887c4',
        margin:20

    },
    inputView:{
        flexDirection:'row',
        margin:15,
        marginBottom:30
    },
    textInput:{
        borderBottomColor:'#a887c4',
        borderBottomWidth:1,
        width:200
    },

    button:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'33%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:598,
    },
    buttonText:{
        color:'white',
        fontSize:25
    },
    mobileLogo:{
        height:35,
        width:35
    },
    image:{
        height:75,
        width:75,
        borderRadius:40,
        alignSelf:'center'
    },
    camera:{
        height:20,
        width:20,
        position:'absolute',
        top:-12,
        alignSelf:'center'
    },
    button2:{
        backgroundColor:'#4f1d7a',
        alignSelf:'center',
        alignItems:'center',
        width:'33%',
        height:30,
        borderRadius:15,
        
    },

})