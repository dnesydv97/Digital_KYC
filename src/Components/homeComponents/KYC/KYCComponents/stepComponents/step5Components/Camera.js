// 


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class Shoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      processing: false,
    };
  }
  async startRecording() {
    this.setState({recording: true});
    // default to mp4 for android as codec is not set
    const {uri, codec = 'mp4'} = await this.camera.recordAsync();
  }
  stopRecording = () => {
    this.camera.stopRecording();
  };
  render() {
    const {recording, processing} = this.state;

    let button = (
      <TouchableOpacity
        onPress={this.startRecording.bind(this)}
        style={styles.capture}>
        {console.log('aaa')}
        <Text style={{fontSize: 14}}> RECORD </Text>
      </TouchableOpacity>
    );
    if (recording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecording.bind(this)}
          style={styles.capture}>
          <Text style={{fontSize: 14}}> STOP </Text>
        </TouchableOpacity>
      );
    }
    if (processing) {
      button = (
        <View style={styles.capture}>
          <ActivityIndicator animating size={18} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          {button}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#e75480',
    borderRadius: 40,
    width: 80,
    height: 80,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
});