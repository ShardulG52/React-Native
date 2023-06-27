import React, { useState } from "react";
import { Button, TextInput, View ,Text } from "react-native";

interface child2Props{
    Add : Function,
    Subtract : Function,
    Multiply: Function,
    Divide:Function
}

function Child2(props: child2Props){

    const [input1,setInput1] = useState<string>()
    const [input2,setInput2] = useState<string>()

    return (
        <View style={{margin:30}}>
            <Text>Calculator </Text>
            <TextInput placeholder="Enter First Number " onChangeText={setInput1} value={input1}></TextInput>
            <TextInput placeholder="Enter Second Number" onChangeText={setInput2} value={input2}></TextInput>
            <Button title="Add" onPress={()=>props.Add(Number(input1),Number(input2))}></Button>
            <Button title="Subtract" onPress={()=>props.Subtract(Number(input1),Number(input2))}></Button>
            <Button title="Multiply" onPress={()=>props.Multiply(Number(input1),Number(input2))}></Button>
            <Button title="Divide" onPress={()=>props.Divide(Number(input1),Number(input2))}></Button>
        </View>
    );
}

export default Child2;