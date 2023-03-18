import * as React from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  color,
  ScrollView,
} from 'react-native';


const confirm = (navigate) => {
  return (
    <View style={styles.Container}>
      <View style={{flexDirection: 'column', marginTop: 45, marginLeft:40}}>
        <Text style={styles.text}>Do you want to fill form yourself?</Text>

        <Image
          source={require('../assets/satrter2.png')}
          style={styles.Image}
        />
      </View>
      <Text style={styles.text1}>Form can be filled by yourself or bank representative can do it for while at meeting.</Text>

      {/* <TouchableOpacity onPress={() => navigate('Profile')}>
     
      </TouchableOpacity> */}
       <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:70,
                marginLeft:20,
                marginRight:20
              }}>
              <TouchableOpacity style={styles.prevBtn} >
              <Text> Let bank fill</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextBtn}>
              <Text>I want to fill</Text>
            </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: 'black',
    // fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  text1: {
    marginLeft: 55,
    marginTop: 35,
    fontSize: 15,
    color: 'black',
   justifyContent:'center'
  
  },
  Image: {
  
    marginTop: 50,
 
    //resizeMode: "stretch",
    //resizeMode:"contain" ,
    //resizeMode:"center" ,
    // resizeMode: "repeat",
   
  },
  prevBtn: {
    backgroundColor: 'transparent',
    borderColor: '#dfa00a',
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
    marginRight: 30,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBtn: {
    backgroundColor: '#dfa00a',
    borderRadius: 25,
    padding: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#dfa00a',
    borderWidth: 2
  }
});

export default confirm;
