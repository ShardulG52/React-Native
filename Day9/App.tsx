import React, {useState} from 'react';
import {Context} from './Context/MyContext';
import {Text, View} from 'react-native';
import A from './component/A';

function App() {
  const [name, setName] = useState<string>('Shardul');
  return (
    <Context.Provider value={{name, setName}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 55}}>My Name is {name}</Text>
        </View>
        <A />
      </View>
    </Context.Provider>
  );
}

export default App;
