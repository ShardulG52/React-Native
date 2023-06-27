import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Child from "./Child";


const styles1 = StyleSheet.create({
    
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#942e0c',
      borderRadius: 6,
      backgroundColor: '#fa774b',
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    },
  });
function Parent (){

    const[value,setValue] = useState('');

    const reset = ()=>{
      setValue('');
    }
    
    function value1 (val:string){

        setValue(val);
    }
    return <View>
        <Child value={value1}  reset={reset}></Child>
        <Text style= {styles1.title}>Response is : {value}</Text>
    </View>

};

export default Parent;

