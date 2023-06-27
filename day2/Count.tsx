import React, { useState } from "react";
import { Button, View } from "react-native";




interface CountProps{

    count :number,
    increment : Function,
    decrement : Function,
    reset     : Function
}



function Count(props:CountProps){

    
    return (
        <View >
            <Button title="Increment" onPress={()=>props.increment()}/>
            <Button title="Decrement" onPress={()=>props.decrement()}/>
            <Button title="Reset" onPress={()=>props.reset()}/>
        </View>
    )

    
}

export default Count;