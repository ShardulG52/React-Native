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

    count:{
        marginTop: 10,
      borderWidth: 4,
      borderColor: '#8c4303',
      borderRadius: 20,
      backgroundColor: '#fa9d4b',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 25,

    }
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
        <View style= {styles.count}>
            <Text >Count : {count}</Text>
            </View>
    
    </View>;
};

export default Greeting;