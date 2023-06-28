    import axios from 'axios'
    import React, { useEffect, useState } from 'react'
    import { Text, View , SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native'



    export type Task={

        id: number,
        Task:string,
        IsCompleted:boolean
    }

    export const url = 'https://649bc4c9048075719236e4d6.mockapi.io/api/Task/';


    function Details(props:any) {
    


    const [data,setData] = useState<Task[]>();

    const fetchData =  ()=>{
    
        axios.get(url)
        .then((res)=>{
        setData(res.data);
        })
    }



    const deleteHandle = (id:number)=>{
        
        axios.delete(url+id)
        .then((res)=>{
            setData(res.data)
            props.navigation.navigate("Details");
        })
        .catch((e)=>console.log(e)) 
    }
    useEffect(() => {
        fetchData()
    },[data]);

    useEffect(()=>{
        const sub = props.navigation.addListener("focus",()=>{
            fetchData()
        })
        return sub;
    },[props.navigation])


    return (
        <SafeAreaView>
    
        <View>
            <View style={style.headView}>
                <Text style={style.headText}>Task</Text>
                <Text style={style.headText}>Done</Text>
                <Text style={style.headText}>Update</Text>
                <Text style={style.headText}>Delete</Text>
                
            </View>
            <FlatList 
            data={data}
            renderItem={({item,index}) => 
            <View style={[style.flatView,{backgroundColor:index%2?'#b354ab':'#e6a5e0'}]}>
            <View><Text >{item.Task}</Text></View>
            <View><Text >{item.IsCompleted+""}</Text></View>
            
            <TouchableOpacity onPress={()=>props.navigation.navigate('Update',item)} >
            <Text >Update</Text>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={()=>deleteHandle(item.id)} >
            <Text > Delete</Text>
            </TouchableOpacity>
        
            
            </View>
        }
            />
        </View>


        </SafeAreaView>
    )
    }

    export default Details;

    const style = StyleSheet.create({
        headView:{
            flexDirection:'row' , 
            justifyContent:'space-around',
            borderBottomWidth:4,
        },
        headText:{
            fontSize:20,
            color:'#4f0a49'
        },
        flatView:{
            flexDirection:'row',
            justifyContent:'space-around',
            borderBottomWidth:2,
        },
    })