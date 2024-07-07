import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {Pokemon} from '../types/types';

interface Props {
  pokemonCount: number;
  pokemonData: Pokemon | null;
  changePokemon: () => void;
}

const PokemonDisplay: React.FC<Props> = ({
  pokemonCount,
  pokemonData,
  changePokemon,
}) => {
  return (
    <View style={styles.container}>
      <Text>Total Pokémons: {pokemonCount}</Text>
      {pokemonData && (
        <>
          <Text>Name: {pokemonData.name}</Text>
          <Image
            source={{uri: pokemonData.sprites.front_default}}
            style={styles.image}
          />
          <Button title="Change Pokémon" onPress={changePokemon} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});

export default PokemonDisplay;
