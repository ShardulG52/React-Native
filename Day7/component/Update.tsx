import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Task, url } from './Details';
import { Dimensions, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';



function Update(props:any) {

const id1 = props.route.params.id;
const task1 = props.route.params.Task;
const isCompleted1 = props.route.params.IsCompleted;

const [data,setData] = useState<Task[]>();
const [task,setTask] = useState<string>(task1);
const [isCompleted,setIsCompleted] = useState<boolean>(isCompleted1);

const toggleSwitch = () => setIsCompleted(previousState => !previousState);

const fetchData =  (task:string,isCompleted:boolean)=>{
      
    axios.put(url+id1,{
      Task: task,
      IsCompleted: isCompleted
    })
    .then((res)=>{
          setData(res.data);
          props.navigation.navigate("Details");
        })
    .catch((e)=>console.log(e))
    }

    
  return (
    <SafeAreaView style={style.container}>
        <View style={style.purpleView}>
            <View style={style.inputView}>
            <Text style={style.text}>Task: </Text>
            <TextInput onChangeText={setTask} placeholder='  Enter Task' value={task} style={style.textInput}></TextInput>
            </View>
            <View style={style.inputView2}>
                <Text style={style.text}>Completed: </Text>
            <Switch
        onValueChange={toggleSwitch}
        value={isCompleted}
      />
            </View>
        </View >
            <TouchableOpacity style={style.button2} onPress={()=>fetchData(task,isCompleted)}>
            <Text style={style.buttonText}>Update</Text>
            </TouchableOpacity>
        
    </SafeAreaView>
  )
}

export default Update;


const screenHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:598,
    },
    button2:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:658,
    },
    
    buttonText:{
        color:'white',
        fontSize:25
    },
    purpleView:{

        justifyContent:'center',
        marginTop:20,
        alignItems:'center', 
        backgroundColor:'#d8c3eb' ,
        width:250,
        borderRadius:10,
        height:screenHeight/3
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },

    textInput:{
        borderWidth:2,
        width:'80%',
    },

    inputView:{
        flexDirection:'row',
        margin:20
    },
    inputView2:{
        flexDirection:'row',
        margin:20
    }

})