import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import styles from '../../../KYCSteps.styles';
import step2Styles from '../step2Components/Step2.styles';
import DocumentPicker from 'react-native-document-picker';
const App = (props) => {
  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState([]);

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={{marginBottom: 20, marginTop: 20}}>
      <View style={step2Styles.textContainer}>
        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
          Upload Document
        </Text>
      </View>
      <View style={step2Styles.detailsContainer}>
        <Text style={[styles.descriptionText, {fontSize: 18}]}>
          Upload your recently taken PP size photo here.
        </Text>
        <Text
          style={[
            styles.descriptionText,
            {marginTop: 0, marginBottom: 15, marginLeft: 0},
          ]}>
          (Upload pdf or image file).
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={selectOneFile}>
            {/*Single file selection button*/}
            <Text
              style={{
               
                fontSize: 16,
                backgroundColor: '#D3D3D3',
                borderRadius: 7,
                // borderEndWidth: 10,
                padding:5,
                fontWeight:'700',

             

                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              Choose file
            </Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/offices/40/000000/attach.png',
              }}
              style={styles.imageIconStyle}
            />
          </TouchableOpacity>

          {/* <Text
            style={[
              styles.descriptionText,
              {marginTop: 5, marginBottom: 15, marginLeft: 10, fontSize: 15},
            ]}>
            No file chosen.
          </Text> */}
          <Text
            style={{
              backgroundColor: '#fff',
              fontSize: 15,
              marginTop: 30,
              color: 'black',
              marginLeft: -120,
              marginRight: 120,
            }}>
            {singleFile.name ? singleFile.name : ''}
            {'\n'}
          </Text>
          <View
            style={{
              backgroundColor: 'grey',
              height: 2,
              margin: 10,
            }}
          />
        </View>
        <Text style={[styles.descriptionText, {fontSize: 18}]}>
          Upload your recently taken PP size photo here.
        </Text>
        <Text style={[styles.descriptionText, {marginTop: 0}]}>
          (Upload pdf or image file).
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={selectOneFile}>
            {/*Single file selection button*/}
            <Text
              style={{
                fontSize: 16,
                backgroundColor: '#D3D3D3',
                borderRadius: 7,
                padding:5,
                fontWeight:'700',

             

                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              Choose file
            </Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/offices/40/000000/attach.png',
              }}
              style={styles.imageIconStyle}
            />
          </TouchableOpacity>

          {/* <Text
            style={[
              styles.descriptionText,
              {marginTop: 8, marginBottom: 15, marginLeft: 10, fontSize: 15},
            ]}>
            No file chosen.
          </Text> */}
          <Text
            style={{
              backgroundColor: '#fff',
              fontSize: 15,
              marginTop: 30,
              color: 'black',
              marginLeft: -120,
              marginRight: 120,
            }}>
            {singleFile.uri ? singleFile.uri : ''}
            {'\n'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
