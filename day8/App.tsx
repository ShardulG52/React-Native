import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react';
import Home from './component/home';
import Camera from './component/camera';


const stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Camera' component={Camera} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

