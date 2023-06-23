import React from "react";
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Product } from "../App";


interface productProps {

    allProducts: Product[],
    addProduct : Function,
    removeProduct: Function

}

function ProductList(props:productProps){



    return (
        
        <View>
            <Text style={style.textCart}>Product List</Text>
            <FlatList 
            data={props.allProducts}
            renderItem={({item})=>{
                return (
                    <View style ={{alignItems:'center'}}>
                        <View style ={{marginTop:40 }}>
                        <Text style={{fontSize:25 , alignSelf:'center'}}>{item.productId} </Text>
                        <Text style={{fontSize:20 }}>{item.productName} {item.price}</Text>

                        </View>
                        <Image source={{uri:item.image}} height={100} width={100}  />
                        <View style={{flexDirection:'row'}}>
                            <View >
                            <Button title="Add" onPress={()=> props.addProduct(item.productId)} ></Button>
                            </View>
                            <View>
                            <Button title="Remove" onPress={()=> props.removeProduct(item.productId)}></Button>
                            </View>
                        
                        </View>
                    </View>
                )
            }}
            />

             

        </View>
        
    )
}


export default ProductList;

const style = StyleSheet.create(
{
    textCart :{
        marginTop:50 ,
        fontSize:30,
        textAlign:'center',
        color:'red',
        backgroundColor:'black'
    },
    
})