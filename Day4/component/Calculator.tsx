    import React, { useEffect, useState } from "react";
    import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



    interface CalculatorInterface {
        onPress : Function
    }




    function Calculator(props: CalculatorInterface){
        
        

        const array = ['1','2','3','4','5','6','7','8','9','+','0','-','*','/','=','back','reset'];
        return (<ScrollView>
            
            
            <FlatList style={style.flatList}
            data={array}
            numColumns={3}
            renderItem={({item})=>{
                return <View style={style.number}> 
                <TouchableOpacity style={style.touchableOpacity} onPress={()=> props.onPress(item)}>
                    <Text style={style.numText}>{item}</Text>
                </TouchableOpacity>
                </View>
            }}
            
            />
            </ScrollView>
        )
    }

    export default Calculator;


    const style = StyleSheet.create({

        flatList:{
            margin:30 , 
            marginLeft:85
        },
        
        number :{
            padding:10,

        },
        touchableOpacity:{
            backgroundColor:'#e6c291',
            
            borderWidth:10,
            borderColor:'#e6c291',
            borderRadius:35
            
        },
        numText:{
            fontSize:30,
            margin:15
            
        }
    });


