import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import ImageSlider from '../Components/homeComponents/ImageSlider/ImageSlider';
import SearchComponent from '../Components/homeComponents/SearchBar/SearchComponent';
import Individual from '../Components/homeComponents/individualBox/Individual';
import OurProductsText from '../Components/homeComponents/ourProductsText/OurProductsText';
import Khata from '../Components/homeComponents/KhataTypes/Khata';
import KYCSteps from '../Components/homeComponents/KYC/KYCSteps';
import NetScreen from './NetScreen';
import ZoomScreen from './ZoomScreen'
import ClockScreen from '../Components/homeComponents/KYC/KYCComponents/stepComponents/step5Components/ClockScreen'
import FormData from './../utils/formData';

const Home = (props) => {
  const formData = new FormData({
    Branch: 'Kathmandu',
    CustomerType: 'Individual'
  });

  const [screen, setScreen] = useState('home');
  const KYC = () => {
    setScreen('KYCSteps');
  };
  return (
    <ScrollView>
    <NetScreen/>
      {screen == 'home' && (
        <View style={styles.container}>
          <SearchComponent />
          <ImageSlider />
          <ClockScreen />
          <ZoomScreen/>
          <OurProductsText />
          <Individual />
          <Khata KYCSteps={KYC} />
          
          <View style={{margin:20}}>
       
        </View>
        </View>
      )}

      {screen ==
        'KYCSteps' && (
          <View style={styles.container}>

        
            <KYCSteps formData={formData} schedule = {props.schedule}/>

          </View>
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
