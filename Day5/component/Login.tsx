
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


interface logProp{
    login:Function;
    anime:Function;
}
function Login(props:logProp){

    return (    
        <SafeAreaView style={style.safeAreaView}>
            <View style={style.container}>
            <Image source={{uri:'https://cdn.freebiesupply.com/logos/large/2x/craft-60-logo-png-transparent.png'}} style={style.imageLogo}/>
            <View style={style.purpleView}>
            <Text style={style.loginText}> Login</Text>
            <View style={style.inputView}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/0/191.png'}} style={style.mobileLogo}></Image>

            <TextInput placeholder="Mobile Number" style={style.textInput}></TextInput>
            </View>
            </View>
            <TouchableOpacity style={style.button} onPress={()=>props.login()}>
            <Text style={style.buttonText}>Next</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.button2} onPress={()=>props.anime()}>
            <Text style={style.buttonText}>Animation Exercise</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default Login;

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
        marginBottom:20
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
        width:100,
        height:30,
        borderRadius:15,
        position:"absolute",
        top:520,
    },
    buttonText:{
        color:'white',
        fontSize:25
    },
    mobileLogo:{
        height:25,
        width:25
    },
    button2:{
        backgroundColor:'#4f1d7a',
        alignSelf:'center',
        alignItems:'center',
        width:'100%',
        height:30,
        borderRadius:15,
        marginBottom:10
        
    },

})