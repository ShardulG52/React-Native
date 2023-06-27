
import React, { useState } from 'react';
import { Text,View } from 'react-native';
import Child from './Child';
import Child2 from './Child2';




function App() {
const [name , setName] = useState ('');


  function name1(n:string){
    setName(n);
  }

  const reset = ()=>{
    setName('')
  }

  const [ans,setAns] = useState<number>(0);

  function add (input1: number,input2: number){
    setAns(input1+input2);
  }
  function subtract (input1: number,input2: number){
    setAns(input1 - input2);
  }
  function  multiply(input1: number,input2: number){
    setAns(input1*input2);
  }
  function divide (input1: number,input2: number){
    setAns(input1/input2);
  }

  return (

    <View >
      
      <Child name={name1} reset={reset}/>
      <Text>   Hello {name} </Text>
      <Child2 Add={add} Subtract={subtract} Multiply={multiply} Divide={divide} ></Child2>
      <Text>Result: {ans}</Text>

    </View>
  )
    
      
  
}



export default App;
