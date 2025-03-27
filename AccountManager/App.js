import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/modules/Home';

function App() {

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  }
});

export default App;
