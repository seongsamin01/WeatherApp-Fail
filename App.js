import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
      <View style={styles.greenView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  greenView: {
    flex: 1,
    backgroundColor: "green"
  }
});
