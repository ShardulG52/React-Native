import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Context} from '../Context/MyContext';

function D() {
  const {name, setName} = useContext(Context);
  const [text, setText] = useState<string>('');

  const setNameHandle = (text: string) => {
    setName(text);
    setText('');
  };
  return (
    <View style={style.view}>
      <Text style={{fontSize: 20}}>This is D</Text>
      <TextInput
        style={style.textInput}
        placeholder="enter your name"
        onChangeText={setText}
        value={text}></TextInput>
      <View style={style.button}>
        <TouchableOpacity onPress={() => setNameHandle(text)}>
          <Text style={{alignSelf: 'center', color: 'darkblue'}}>Change </Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 20}}>My name is {name}</Text>
    </View>
  );
}

export default D;

const style = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    padding: 5,
    margin: 5,
    width: '100%',
    borderRadius: 10,
  },
  button: {
    alignSelf: 'center',
    padding: 15,
    backgroundColor: 'powderblue',
    borderRadius: 30,
  },
  view: {
    alignItems: 'center',
    backgroundColor: '#e98477',
    padding: 15,
    borderRadius: 25,
  },
});
