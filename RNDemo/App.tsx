/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SwitchDemo from './src/7/7.18/components/SwitchDemo';
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
      <View style={styles.container}>
        <SwitchDemo />
      </View>
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
