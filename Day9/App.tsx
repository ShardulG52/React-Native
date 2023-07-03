import React, {useState} from 'react';
import {Context} from './Context/MyContext';
import {StyleSheet, Text, View} from 'react-native';
import A from './component/A';

function App() {
  const [name, setName] = useState<string>('Shardul');
  return (
    <Context.Provider value={{name, setName}}>
      <View style={style.view}>
        <View>
          <Text style={{fontSize: 35, padding: 20, marginBottom: 30}}>
            My Name is {name}
          </Text>
        </View>
        <A />
      </View>
    </Context.Provider>
  );
}

export default App;

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414333',
    padding: 15,
  },
});
