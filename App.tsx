/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet
} from 'react-native';
import Home from './src/screens/Home';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.screen}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default App;
