import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create({

    textInput :{
  
      marginTop :40,
      textAlign :'center',
      borderWidth : 1,
      borderColor: '#20232a',
    }    
  })


interface childProps{
    name : Function,
    reset : Function
  }
  

function Child(props: childProps){

    const [name , setName] = useState ("");

    return (
        <View>
            <TextInput style={style.textInput} placeholder='Enter your name' onChangeText={setName} value={name}> </TextInput>
            <Button title="Submit" onPress={ ()=> props.name(name)}></Button>
            <Button title="Reset"  onPress={()=> props.reset()}></Button>
            




        </View>
    )
}

export default Child;