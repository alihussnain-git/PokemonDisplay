import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  error: string | null;
}

const ErrorComponent: React.FC<Props> = ({error}) => {
  return (
    <View style={styles.container}>
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorComponent;
