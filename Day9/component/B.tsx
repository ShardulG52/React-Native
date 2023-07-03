import React from 'react';
import C from './C';
import {StyleSheet, Text, View} from 'react-native';

function B() {
  return (
    <View style={style.view}>
      <Text style={{fontSize: 40}}>This is B</Text>
      <C />
    </View>
  );
}

export default B;
const style = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#f96c84',
    padding: 15,
  },
});
