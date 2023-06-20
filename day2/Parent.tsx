import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Child from "./Child";


const styles1 = StyleSheet.create({
    
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: 'brown',
      borderRadius: 6,
      backgroundColor: 'grey',
      color: 'white',
      textAlign: 'center',
      fontSize: 30
    },
  });
function Parent (){

    const[value,setValue] = useState('');
    
    function value1 (val:string){

        setValue(val);
    }
    return <View>
        <Child value={value1} ></Child>
        <Text style= {styles1.title}>Response is : {value}</Text>
    </View>

};

export default Parent;

