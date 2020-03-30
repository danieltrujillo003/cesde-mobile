import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.superbox}>
        <View style={{...styles.box1, ...styles.genericBox}}>
         <Text style={styles.text}>Vista 1</Text>
        </View>
        <View style={{...styles.box2, ...styles.genericBox}}>
          <Text style={styles.text}>Vista 2</Text>
        </View>
      </View>
      <View style={styles.superbox}>
        <View style={{...styles.box3, ...styles.genericBox}}>
          <Text style={styles.text}>Vista 3</Text>
        </View>
        <View style={{...styles.box4, ...styles.genericBox}}>
          <Text style={styles.text}>Vista 4</Text>
        </View>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  text: {
    color: '#000'
  },
  superbox: {
    flex: 1,
    flexDirection: 'row'
  },
  genericBox: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    width: '50%',
    backgroundColor: '#ffc107',
  },
  box2: {
    backgroundColor: '#0d47a1'
  },
  box3: {
    backgroundColor: '#d50000'
  },
  box4: {
    backgroundColor: '#ff0'
  }
});
