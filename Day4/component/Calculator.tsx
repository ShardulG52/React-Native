import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



interface CalculatorInterface {
    onPress : Function
}




function Calculator(props: CalculatorInterface){
    
    

    const array = ['1','2','3','4','5','6','7','8','9','+','0','-','*','/','=','back','reset'];
    return (<ScrollView>
        
        
        <FlatList
           data={array}
           numColumns={3}
           renderItem={({item})=>{
            return <View style={style.number}> 
            <TouchableOpacity style={style.touchableOpacity} onPress={()=> props.onPress(item)}>
                <Text style={style.numText}>{item}</Text>
            </TouchableOpacity>
            </View>
           }}
           
           
           
        />

        
        </ScrollView>
    )
}

export default Calculator;


const style = StyleSheet.create({

    textInputView :{
        borderColor: 'black',
        borderWidth: 1,
        marginTop:40,
        width:200,
        height:20,
        alignSelf:'center'
    },
    text :{
        marginTop:20,
        paddingBottom:25,
        width:200,
        height:20,
        fontSize:20,
        fontWeight:"bold",
        alignSelf:'center',
        backgroundColor:'black',
        color:'white'
    },
    number :{
        padding:40,

    },
    touchableOpacity:{
        backgroundColor:'#c7d7f0',
        padding:20
        
    },
    numText:{
        fontSize:30,
        
    }
});


