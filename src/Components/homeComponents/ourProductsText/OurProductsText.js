import React from 'react';
import {View, Text} from 'react-native';
import styles from './OurProductsText.styles';

const OurProductsText = () => {
  return (
    <View>
      <View
        style={styles.textContainer}>
        <Text style={{fontSize: 19, fontWeight: 'bold'}}>Our Products</Text>
      </View>
      <View style={styles.horizontalLineContainer}>
        <View style={styles.leftHorizontalLine} />
        <View style={styles.dot}></View>
        <View style={styles.rightHorizontalLine} />
      </View>
    </View>
  );
};

export default OurProductsText;
