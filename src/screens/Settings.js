import React, {useState} from 'react';
import { StyleSheet, View, Text,Switch } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
      <View style={styles.container}>

        <View style={styles.item1}>
          <Text style={styles.text}>Language</Text>

          <Switch
         style = {{marginLeft:203,marginTop:10}}
          trackColor={{false: '#767577', true: '#008000'}}
          thumbColor={isEnabled ? '#767577' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
        <View style={styles.item2}>
          <Text style={styles.text}>Notification</Text>
          <Switch
         style = {{marginLeft:190,marginTop:10}}
          trackColor={{false: '#767577', true: '#008000'}}
          thumbColor={isEnabled1 ? '#767577' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
        </View>
        <View style={styles.item3}>
          <Text style={styles.text}>Camera Permission</Text>
          <Switch
         style = {{marginLeft:135,marginTop:10}}
          trackColor={{false: '#767577', true: '#008000'}}
          thumbColor={isEnabled2 ? '#767577' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
        </View>
        <View style={styles.item4}>
          <Text style={styles.text}>Microphone Permission</Text>
          <Switch
         style = {{marginLeft:105,marginTop:10}}
          trackColor={{false: '#767577', true: '#008000'}}
          thumbColor={isEnabled3 ? '#767577' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
        </View>
        <View style={styles.item5}>
          <Text style={styles.text}>FAQ</Text>
        </View>
        <View style={styles.item6}>
          <Text style={styles.text}>About</Text>
        </View>
        <View style={styles.item7}>
          <Text style={styles.text}>Policy</Text>
        </View>
        <View style={styles.item8}>
          <Text style={styles.text}>Terms and condition</Text>
        </View>

      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   marginTop:1,
    lineHeight:100
  },
  text: {
    fontWeight: "bold",
    marginTop:25,
    fontSize: 16,
    marginLeft:20,
    marginBottom: 15
  },
  item1: {
    backgroundColor: "#FFF",
 flexDirection:'row'

  },
  item2: {
    backgroundColor: "#F0F8FF",
    flexDirection:'row'
  },
  item3: {
    backgroundColor: "#FFF",
    flexDirection:'row'
  },
  item4: {
    backgroundColor: "#F0F8FF",
    flexDirection:'row'
  },
  item5: {
    backgroundColor: "#FFF",

  },
  item6: {
    backgroundColor: "#F0F8FF",

  },
  item7: {
    backgroundColor: "#FFF",

  },
  item8: {
    backgroundColor: "#F0F8FF",

  },
});
export default App;

