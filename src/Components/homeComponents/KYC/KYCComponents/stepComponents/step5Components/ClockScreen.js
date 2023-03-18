
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CountDown from 'react-native-countdown-component';


import moment from 'moment';

const App = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    // Coundown timer for a given expiry date-time
    let date = 
      moment()
        .utcOffset('+05:45')
        .format('YYYY-MM-DD hh:mm:ss');
    
   
    let expirydate = '2021-05-24 04:30:45';
    
    let diffr = 
      moment
        .duration(moment(expirydate)
        .diff(moment(date)));
   
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());

   
    var d = hours * 60 * 60 + minutes * 60 + seconds;

   
    setTotalDuration(d);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
        <CountDown
          until={totalDuration}
         
          timetoShow={('H', 'M', 'S')}
          
        onFinish={() => alert(`Lets start your meeting`)}
     
          onPress={() => alert(`It's your remaning time`)}
        
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});