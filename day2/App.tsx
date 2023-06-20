
import React from 'react';
import Greeting from './Greeting';
import {
  View
} from 'react-native';
import Parent from './Parent';







function App(): JSX.Element {
  

  return (
    <View>
        <Greeting></Greeting>
        <Parent></Parent>
    
    </View>
  );
}



export default App;
