import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

import Home from "./screens/Home";
import Setting from "./screens/Setting";
import Register from "./screens/Register";
import Login from "./screens/Login";






function App(){

const [authentication,setAuthentication] = useState <boolean>(false);



const authenticationCheck= createNativeStackNavigator();
  return (
    <NavigationContainer >
      <authenticationCheck.Navigator>
      {authentication?(
      <authenticationCheck.Group >
        <authenticationCheck.Screen name="Home" component={Home}/>
        <authenticationCheck.Screen name="Setting" component={Setting}/>
      </authenticationCheck.Group>
      ):(
      <authenticationCheck.Group >
      <authenticationCheck.Screen name="Register" component={Register}/>
        <authenticationCheck.Screen name="Login" component={Login}/>
      </authenticationCheck.Group>
      )
      }
      </authenticationCheck.Navigator>
    </NavigationContainer>

  )
}



export default App;