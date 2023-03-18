import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SuccessModal = (props) => {
  return (
    <Modal visible={props.visibility} transparent={true}>
      <View
        style={{
          backgroundColor: '#000000aa',
          flex: 1,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#a7c5eb',
            margin: 60,
            marginTop: '50%',
            padding: 40,
            borderRadius: 8,
          }}>
          <Image
            style={{marginBottom: 18}}
            source={require('../assets/successful.png')}
          />
          <Text>Successful!</Text>
          <TouchableOpacity
            style={styles.successButton}
            onPress={props.dashboard}>
            <Text style={styles.successText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  successText: {
    color: 'white',
  },
  successButton: {
    backgroundColor: '#001370',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default SuccessModal;
