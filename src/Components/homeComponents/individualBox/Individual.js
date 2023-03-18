import React from 'react';
import {View, Text} from 'react-native';
import Hr from 'react-native-hr-component';
import styles from './Individual.styles';

const Individual = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.text}>Individual</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default Individual;
