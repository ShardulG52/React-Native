import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import ProductList from "./component/ProductComponent";
import Cart from "./component/CartComponent";


export interface Product{
  productId:number,
  productName : string,
  price : number,
  image ?: string

}

export interface CartProduct{
  productId:number,
  quantity : number,
  image ?: string
}

function App(){

  const[product,setProduct] = useState<Product[]>([
    {
      productId: 1,
      productName: 'Washing Machine',
      price: 4000,
      image: 'https://pngimg.com/d/washing_machine_PNG15578.png'
    },
    {
      productId: 2,
      productName: 'AC',
      price: 40000,
      image: 'https://www.transparentpng.com/thumb/ac/HY2tmy-air-conditioning-simple-image.png'
    },
    {
      productId: 3,
      productName: 'Water RO',
      price: 7000,
      image: 'https://www.pngmart.com/files/6/Kent-RO-Water-Purifier-PNG-Pic.png'
    },
    {
      productId: 4,
      productName: 'Bed',
      price: 5000,
      image: 'https://w7.pngwing.com/pngs/51/929/png-transparent-bed-frame-upholstery-mattress-bed-size-bed-angle-furniture-drawer-thumbnail.png'
    }

  ]);

  const [productInCart, setProductInCart] = useState<CartProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const addProduct =(productId:number)=>{
    
    setProductInCart((prev:CartProduct[])=>{
      const productAvailable = prev.find((p) =>p.productId=== productId);
      const productDetails = product.find((p)=>p.productId == productId);
      if(productAvailable && productAvailable.productId === productId){
        
        productAvailable.quantity += 1;
        setTotal(prev => {
          prev += productDetails?productDetails.price:0;
          return prev;
        })
        
      }
      else{
      prev.push({productId:productId,quantity:1});
      setTotal(prev => {
        prev += productDetails?productDetails.price:0;
        return prev;
      })
      
      }
      
      return prev;
    })
    
  }

  const removeProduct =(productId:number)=>{
    setProductInCart((prev:CartProduct[])=>{
      const productAvailable = prev.find((p) =>p.productId=== productId);
      const productDetails = product.find((p)=>p.productId == productId);
      const q = productAvailable?.quantity?productAvailable?.quantity:0;
      if(q >= 1){
      if(productAvailable && productAvailable.productId === productId){
        
        productAvailable.quantity -= 1;
        setTotal(prev => {
          prev -= productDetails?productDetails.price:0;
          return prev;
        })
        
      }
      else{
      prev.push({productId:productId,quantity:1});
      setTotal(prev => {
        prev -= productDetails?productDetails.price:0;
        return prev;
      })
      
      }}

      else{
        prev= [];
        setTotal(0);
        return prev;
      }
      
      return prev;
    })
  }

  const clearCart = ()=>{

      setProductInCart((prev)=>{
        prev =[];
        setTotal(0);
        return prev;
      })
    }

  return (
    <SafeAreaView>
    <ScrollView>
      <View>
        <ProductList allProducts={product} addProduct={addProduct} removeProduct={removeProduct} />
        <Cart  addProduct={addProduct} removeProduct={removeProduct} total={total} clearCart={clearCart} cart={productInCart} allProduct={product}/>
      </View>
    </ScrollView></SafeAreaView>
  )
}

export default App;