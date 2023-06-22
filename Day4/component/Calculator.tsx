import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export interface CalculatorInterface {
    array: Array<string>,
    
  
}




function Calculator(props: CalculatorInterface){
    
    const [input1,setInput] = useState('');
    const [total,setTotal] = useState<number>(0);
    

    const [operator,setOperator] = useState('')
    let operand = [];
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
                    setInput((operand1+operand2) +"")
                    break;
                }
                case '-':{
                    setTotal(operand1-operand2);
                    setInput((operand1-operand2) +"")
            
                    break;
                }
                case '/':{
                    setTotal(operand1/operand2);
                    setInput((operand1/operand2) +"")
                    break;
                }
                case '*':{
                    setTotal(operand1*operand2);
                    setInput((operand1*operand2) +"")
                    break;
                }
                
            }   
            
            console.log(total);
        }
    }
    type ItemProps = {value:string};
    const Item = ({value}:ItemProps)=>(
        <View style={style.number}> 
        <TouchableOpacity style={style.touchableOpacity} onPress={()=> onPress(value)}>
            <Text style={style.numText}>{value}</Text>
        </TouchableOpacity>
        </View>

    );

    return (<ScrollView>
        <View style={style.textInputView} >
            <TextInput placeholder="Enter Number" onChangeText={setInput} value={input1}></TextInput>
            
        </View>
        <Text>{input1}</Text>
        <Text style={style.text}> Total : {total}</Text>

        <FlatList
           data={props.array}
           renderItem={({item})=><Item value={item} />}
           
           numColumns={3}
           
        />

        
        </ScrollView>
    )
}

export default Calculator;


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
    number :{
        padding:40,

    },
    touchableOpacity:{
        backgroundColor:'#c7d7f0',
        padding:20
        
    },
    numText:{
        fontSize:30,
        
    }
});


