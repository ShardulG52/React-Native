import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React, { useState } from 'react'

import Home from './component/Home';
import AddDetails from './component/addDetails';
import Update from './component/Update';
import Details from './component/Details';


const stack = createNativeStackNavigator();


function App() {


  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='AddDetails' component={AddDetails}/>
        <stack.Screen name='Details' component={Details}/>
        <stack.Screen name='Update' component={Update}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;