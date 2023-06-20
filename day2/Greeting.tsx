import React, { useState } from "react";
import {  StyleSheet, Text, View } from "react-native";
import Count from "./Count";


const styles = StyleSheet.create({
    
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
function Greeting(){
    const [count , setCount] = useState<number>(0);
    const increment = ()=>{
        setCount(count+1);
    }
    
    const decrement =()=> {
        setCount(count-1);
    }
    
    const reset = ()=>{
        setCount(0);
    }
    const name = "Shardul";
    return <View >
        <Text style= {styles.title} id="head">Hello! Welcome {name}</Text>
        <Count count={count} increment={increment} decrement={decrement} reset={reset} ></Count>
        <Text style= {styles.title}>Count : {count}</Text>
    
    </View>;
};

export default Greeting;