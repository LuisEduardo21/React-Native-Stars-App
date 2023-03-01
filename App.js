import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Home} from './src/screens/Home';

export function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
