import React from 'react'

import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'

function Home(props:any) {
  return (
    <SafeAreaView style={style.container}>
        <View>
            <Text>This is Home Screen</Text>
        </View>
            <TouchableOpacity style={style.button} onPress={()=>props.navigation.navigate("Setting")}>
            <Text style={style.buttonText}>Setting</Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home;

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