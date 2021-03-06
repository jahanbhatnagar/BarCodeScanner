import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './screen/Scan';

export default class App extends React.Component {
  render(){
   return (
    <View style={styles.container}>
      <Text>Scan BarCode Or QR Code </Text>
      <StatusBar style="auto" />
      <Scan/>
    </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});