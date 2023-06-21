import React from "react";
import { Button, Text, View } from "react-native";
import { Product } from "../App";

interface listProps{
    productList:Product[],
    addProduct: Function,
    removeProduct: Function,

}
function Productlist (props:listProps){

    return <View>
        <Text style={{marginTop:50 , fontSize:30,textAlign:'center',color:'red', backgroundColor:'black'}}> Product List </Text>
        <View>
            {props.productList.map((product,index) =>{

                return (
                    <View key={index} style ={{alignItems:'center'}}>
                        <View style ={{marginTop:40 }}>
                        <Text style={{fontSize:25 , alignSelf:'center'}}>{product.productId} </Text>
                        <Text style={{fontSize:20 }}>{product.productName} {product.price}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View >
                            <Button title="Add" onPress={()=> props.addProduct(product.productId)} ></Button>
                            </View>
                            <View>
                            <Button title="Remove" onPress={()=> props.removeProduct(product.productId)}></Button>
                            </View>
                        
                        </View>
                    </View>
                    
                );

            })}
        
        </View>
    </View>

}

export default Productlist;