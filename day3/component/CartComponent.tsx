import React from "react";
import { Button, Text, View } from "react-native";
import { CartProduct} from "../App";

interface cartProps{
    
    cart : CartProduct[],
    addProduct: Function,
    removeProduct: Function,
    total : number,
    clearCart : Function

}

function Cart(props:cartProps){

    return <View style={{marginTop:80}}>
        <Text style={{marginTop:10, fontSize:30 , textAlign:'center',color:'red', backgroundColor:'black'}}>
            Cart 
        </Text>

        {props.cart.map((product,index)=>


        <View key={index}  style={{flexDirection:'row'}}>
            <View>
            <Text style={{fontSize:20 , alignSelf:'center'}}>{product.productId} </Text>
            <Text style={{fontSize:20 }}>{product.quantity} </Text>
            </View>
            <Button title="Add" onPress={()=> props.addProduct(product.productId)} ></Button>
            <Button title="Remove" onPress={()=> props.removeProduct(product.productId)}></Button>
        </View>
        )

        }
        <Text style={{ fontSize:20}}>Total Amount : {props.total}</Text>
        <View style={{marginBottom:80 }}>
        <Button title="Clear Cart" onPress={()=> props.clearCart()}></Button>
        </View>
    </View>
}

export default Cart;