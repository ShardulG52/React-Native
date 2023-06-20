import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

interface childProps{
    value : Function;
}

function Child(props:childProps){

    const [value,setValue] = useState(""); 
    return <View>
        <TextInput placeholder="enter a number " style= {{marginTop : 45 , textAlign : 'center'}} onChangeText={setValue} value={value}></TextInput>
        <Button title="Submit Your Response"  onPress={()=> props.value(value)}/>
        

    </View>
}

export default Child;