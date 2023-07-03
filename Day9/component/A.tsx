import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import B from './B';

function A() {
  return (
    <View style={style.view}>
      <Text style={{fontSize: 50}}> This is A</Text>
      <B />
    </View>
  );
}

export default A;

const style = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#656950',
    padding: 15,
    borderRadius: 25,
  },
});
