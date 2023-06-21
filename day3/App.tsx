import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Productlist from './component/ProductListComponent';
import Cart from './component/CartComponent';

export interface Product{
  productId:number,
  productName : string,
  price : number

}

export interface CartProduct{
  productId:number,
  quantity : number
}



class App extends Component{

  
  addProduct =(productId:number)=>{
    
    this.setState((prev: {productList:Product[],cartProduct :CartProduct[],total:number})=>{
      const productAvailable = prev.cartProduct.find((p) =>p.productId=== productId);
       const productDetails = prev.productList.find((p)=>p.productId == productId);
      if(productAvailable && productAvailable.productId === productId){
        
        productAvailable.quantity += 1;
        prev.total += productDetails?productDetails.price:0;
        
      }
      else{
      prev.cartProduct.push({productId:productId,quantity:1});
      prev.total += productDetails?productDetails.price:0;
      
      }
      
      return prev;
    })
    
  }

  removeProduct =(productId:number)=>{
    this.setState((prev: {productList:Product[],cartProduct :CartProduct[],total:number})=>{
      const productAvailable = prev.cartProduct.find((p) =>p.productId=== productId);
      const productDetails = prev.productList.find((p)=>p.productId == productId);
      if(productAvailable && productAvailable.productId==productId){
        
        if(productAvailable.quantity===1){
          prev.cartProduct = prev.cartProduct.filter(product  =>product.productId !== productId);
          prev.total -= productDetails?productDetails.price:0;
        }
        else{
          productAvailable.quantity -= 1;
          prev.total -= productDetails?productDetails.price:0;
        }
      

        return prev;
      }
      
    })
    
  }

  

  state: {productList:Product[],cartProduct :CartProduct[],total:number}={productList:[],cartProduct:[],total:0};
  constructor (props:any){
    super(props);
    this.state.productList=[
      {
        productId: 1,
        productName: 'Washing Machine',
        price: 4000
      },
      {
        productId: 2,
        productName: 'AC',
        price: 40000
      },
      {
        productId: 3,
        productName: 'Purifier',
        price: 7000
      },
      {
        productId: 4,
        productName: 'Bed',
        price: 5000
      }

    ]
  }
  render() {
    return <ScrollView><View >
      <Text style={{marginTop:80 , fontSize:30 , textAlign:'center',color:'red', backgroundColor:'black'}}> Shopping App</Text>
      <Text style={{marginTop:20 , fontSize:20}}>Cart Total Amount in Parent :  {this.state.total}</Text>
      <Productlist productList={this.state.productList} addProduct={this.addProduct} removeProduct={this.removeProduct}/>
      <Cart cart={this.state.cartProduct} addProduct={this.addProduct} removeProduct={this.removeProduct} total={this.state.total}/>
    </View>
    </ScrollView>
  }
}



export default App;
function productAvailable() {
  throw new Error('Function not implemented.');
}

