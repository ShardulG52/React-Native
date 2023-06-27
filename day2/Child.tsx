import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

interface childProps{
    value : Function;
    reset : Function
}


function Child(props:childProps){

    const [value,setValue] = useState(""); 
    return <View>
        <TextInput placeholder="enter your response " style= {{marginTop : 45 , textAlign : 'center'}} onChangeText={setValue} value={value}></TextInput>
        <Button title="Submit Your Response"  onPress={()=> props.value(value)}/>
        <Button title="Reset Response"  onPress={()=> props.reset()}/>
        

    </View>
}

export default Child;