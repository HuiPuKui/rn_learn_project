/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Anim10 from './src/9/9.10/anim/Anim10';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#FFFFFF'
      />
      <Anim10 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default App;
