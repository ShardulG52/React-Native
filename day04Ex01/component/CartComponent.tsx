import React from "react";
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CartProduct, Product } from "../App";


interface cartProps{
    
    cart : CartProduct[],
    allProduct : Product[],
    addProduct: Function,
    removeProduct: Function,
    total : number,
    clearCart : Function

}

function Cart(props:cartProps){

    return (
       
        <View>
            <Text style={style.textCart}>Cart</Text>
            <FlatList 
            data={props.cart}
            renderItem={({item})=>{
                const productDetails = props.allProduct.find(product=>product.productId === item.productId)
                const productInCart = props.cart.find(product=>product.productId === item.productId)
                return (
                    <View style ={{alignItems:'center'}}>
                        <View style ={{marginTop:40 }}>
                        <Text style={{fontSize:25 , alignSelf:'center'}}>{productInCart?.productId} </Text>
                        <Text style={{fontSize:20 }}>{productInCart?.quantity}</Text>

                        </View>
                        <Image source={{uri:productDetails?.image}} height={100} width={100}  />
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
            <Text style={{ fontSize:20}}>Total Amount : {props.total}</Text>
            <View style={{marginBottom:80 }}>
            <Button title="Clear Cart" onPress={()=> props.clearCart()}></Button></View>
        </View>
        
    )
}


export default Cart;

const style = StyleSheet.create(
{
    textCart :{
        marginTop:50 ,
        fontSize:30,
        textAlign:'center',
        color:'red',
        backgroundColor:'black'
    }
})