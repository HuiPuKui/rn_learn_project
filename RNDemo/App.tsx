/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import PersonalInfo from './src/7/7.19/components/PersonalInfo';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    // <SafeAreaView>
    //   <StatusBar
    //     barStyle='dark-content'
    //     backgroundColor='#FFFFFF'
    //   />
    //   <View style={styles.container}>
    //     <ModalDemo />
    //   </View>
    // </SafeAreaView>
    <PersonalInfo />
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
