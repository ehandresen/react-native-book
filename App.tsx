import React from 'react';
import { Text, View } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
      <Box>#3</Box>
    </View>
  );
}

function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
