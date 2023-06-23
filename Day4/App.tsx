import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Calculator from './component/Calculator';




function App(){


  
  const [input1,setInput] = useState('');
    const [total,setTotal] = useState<number>(0);
    

    const [operator,setOperator] = useState('')
    let operand = [];
    useEffect(()=>{
        setInput(total+"")
    },[total])
    const onPress = (input:string)=> {
        if(input!=='back' &&  input !== 'reset' && input !== '='){

            if(input!=='0' &&!parseInt(input)){
                setOperator(input);
            }
            setInput(prev=>prev+input);
        }
        else if(input==='back'){
            setInput(prev=>prev.slice(0,prev.length-1))
        }
        else if(input==='reset'){
            setInput('');
            setTotal(0);
        }
        else if(input==='='){
            operand = input1.split(/[+-/*]/);
            let operand1 = parseInt(operand[0]);
            const operand2 = parseInt(operand[1]);
            switch(operator){
                case '+':{
                    setTotal(operand1+operand2); 
                    break;
                }
                case '-':{
                    setTotal(operand1-operand2);
                    break;
                }
                case '/':{
                    setTotal(operand1/operand2);
                    break;
                }
                case '*':{
                    setTotal(operand1*operand2);
                    break;
                }
                
            }   
            
            console.log(total);
        }
    }


   return (
    
    <SafeAreaView>
      <View>
      <View style={style.textInputView} >
            <TextInput placeholder="Enter Number" onChangeText={setInput} value={input1}></TextInput>
            
        </View>
        
        <Text style={style.text}> Total : {total}</Text>
        <Calculator onPress={onPress} />

        
      </View>
    </SafeAreaView>
   )
}




export default App;


const style = StyleSheet.create({

  textInputView :{
      borderColor: 'black',
      borderWidth: 1,
      marginTop:40,
      width:200,
      height:20,
      alignSelf:'center'
  },
  text :{
      marginTop:20,
      paddingBottom:25,
      width:200,
      height:20,
      fontSize:20,
      fontWeight:"bold",
      alignSelf:'center',
      backgroundColor:'black',
      color:'white'
      
  },
  
});


