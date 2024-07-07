import React from 'react';
import {View, StyleSheet} from 'react-native';
import PokemonDetails from './src/PokemonDetails';

const App = () => {
  return (
    <View style={styles.container}>
      <PokemonDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
