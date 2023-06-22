import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Calculator from './component/Calculator';


const array = ['1','2','3','4','5','6','7','8','9','+','0','-','*','/','=','back','reset'];
function App(){



   return (
    
    <SafeAreaView>
      <View>
        <Calculator array={array} />
      </View>
    </SafeAreaView>
   )
}




export default App;


