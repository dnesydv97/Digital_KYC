import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../KYCSteps.styles';
import Button from './step1Components/Checkbox'
import ListInfo from './step1Components/ListInfo';
import colors from '../../../../../styles/Colors'
import AlreadyHaveAccountMsg from './step1Components/AlreadyHaveAccountMsg';

const Step1 = (props) => {

  const [state, setState] = useState('default')
  const [isChecked, setIsChecked] = useState([
    {id: 1, value: false, name: 'Yes', selected: false},
    {id: 2, value: true, name: 'No', selected: false},
  ]);
  const onBtnClick = (item) => {
    let updatedState = isChecked.map((isCheckedItem) =>
      isCheckedItem.id === item.id
        ? {...isCheckedItem, selected: true}
        : {...isCheckedItem, selected: false},
    );
    setIsChecked(updatedState);
    if (updatedState[0].selected === true) {
      setState('Already Have Account')
    } else if(updatedState[1].selected === true){
      setState('No Account')
    }
  };

  return (
    <View style={{alignItems: 'flex-start', marginRight: 15, marginLeft: 15}}>
      <Text style={styles.titleText}>Register for Online Account Opening</Text>
      <Text style={styles.descriptionText}>
        Kindly provice your basic information, validate your email ID and start
        Online Account Opening.
      </Text>
      <Text style={styles.titleText}>
        Do you have an existing saving account in Nabil bank?
      </Text>
      <View
      style={{
        flexDirection: 'row',
        
      }}>
      {isChecked.map((item) => (
        <Button
          onPress={() => onBtnClick(item)}
          selected={item.selected}
          key={item.id}>
          {item.name}
        </Button>
      ))}
    </View>
      {state === 'default' ? <ListInfo /> : state === 'Already Have Account' ? <AlreadyHaveAccountMsg /> : <ListInfo /> }
      <TouchableOpacity
        style={[{ borderRadius: 25, padding: 10, alignSelf: 'stretch', alignItems: 'center'}, state === 'No Account' ? {backgroundColor: colors.secondary} : {backgroundColor: 'gray'}]}
        disabled = {state === 'No Account' ? false : true}
        onPress={props.next}>
        <Text style={{color: 'white', fontSize: 18}}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step1;
