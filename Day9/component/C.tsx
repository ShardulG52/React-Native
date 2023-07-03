import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import D from './D';

function C() {
  return (
    <View style={style.view}>
      <Text style={{fontSize: 30}}>This is C</Text>
      <D />
    </View>
  );
}

export default C;
const style = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#5baded',
    padding: 15,
  },
});
