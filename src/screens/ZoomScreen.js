
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text, Alert,TouchableOpacity} from 'react-native';

import ZoomUs from 'react-native-zoom-us';

 const global = {HermesInternal: null | {}};

// 1. `TODO`: Go to https://marketplace.zoom.us/develop/create and Create SDK App then fill `sdkKey` and `sdkSecret`
const skdKey = 'sRq8zkURFOx4qg091QHMkI2v1izoHhOLJJfe';
const sdkSecret = 'wNQv0AiYjgB9pjNgz1qLekivzDKUgBeRqwh7';

// 2. `TODO` Fill in the following fields:
const exampleMeeting = {
  // for both startMeeting and joinMeeting
  meetingNumber: '75684072996',

  // for startMeeting
  userId: '75684072996',
  zoomAccessToken: 'eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiJLRTZOSUdYYlI4V3JXam1yTWxLUVZ3IiwiaXNzIjoid2ViIiwic3R5IjoxLCJ3Y2QiOiJ1czA1IiwiY2x0IjowLCJzdGsiOiJJNHZROVNvWFBESXV3emlqajJLUzdxWjRhUVBGRW1YZkJjRDVfUnlfRjVjLkFHLk9CZU45U0JwLWRHN2RpMVhZNkhTZ3ZpU215NDlMQVpjekZGdUpjMlA4bDBBaWpvSEZHaUIwcWI1Rzh3ejZtakNSTXZJNVBENzNvOU9vOFoxLmhfRU1iWFBfU1BubzhlblM0RjhnZ3cuZmtTWVRZd0taUXhteGpGSyIsImV4cCI6MTYxMDUyNjI2OCwiaWF0IjoxNjEwNTE5MDY4LCJhaWQiOiIxc2cyVXQ0ZVNxbUgwOWt0STZsenVRIiwiY2lkIjoiIn0.5MQGjTADT5L6cTLeliMxKG2sy314OWBOcDamBJF3rDs',

  // for joinMeeting
  password: '5RE604',
};

const App = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const initializeResult = await ZoomUs.initialize({
          clientKey: skdKey,
          clientSecret: sdkSecret,
        });

        console.log({initializeResult});

        setIsInitialized(true);
      } catch (e) {
        Alert.alert('Error', 'Could not execute initialize');
        console.error(e);
      }
    })();
  }, []);

  const startMeeting = async () => {
    try {
      const startMeetingResult = await ZoomUs.startMeeting({
        userName: 'John',
        meetingNumber: exampleMeeting.meetingNumber,
        userId: exampleMeeting.zoomAccessToken,
        zoomAccessToken: exampleMeeting.zoomAccessToken,
      });

      console.log({startMeetingResult});
    } catch (e) {
      Alert.alert('Error', 'Could not execute startMeeting');
      console.error(e);
    }
  };

  const joinMeeting = async () => {
    try {
      const joinMeetingResult = await ZoomUs.joinMeeting({
        userName: 'Wick',
        meetingNumber: exampleMeeting.meetingNumber,
        password: exampleMeeting.password,
      });

      console.log({joinMeetingResult});
    } catch (e) {
      Alert.alert('Error', 'Could not execute joinMeeting');
      console.error(e);
    }
  };
console.log(joinMeeting)
  return (
    <View style={styles.container}>
     
     
 <TouchableOpacity
        style={styles.button}
        onPress={() => joinMeeting()}
      >
        <Text style={{color:'#fff'}}>Join Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  button: {
    backgroundColor: '#dfa00a',
    borderColor: '#dfa00a',
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
});

export default App;
