import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../../KYCSteps.styles';
import step2Styles from './step2Components/Step2.styles';
import colors from '../../../../../styles/Colors';
import CorrespondanceAdd from './step3Components/CorrespondanceAdd';
import Button from './step1Components/Checkbox';
import PermanentAdd from './step3Components/PermanentAdd';
import EmploymentDetails from './step3Components/EmploymentDetails';

const Step3 = (props) => {
  const [state, setState] = useState('yes');
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
      setState('yes');
      props.formData.addData({IsCorrespondenceAddress: "true"})
    } else if (updatedState[1].selected === true) {
      setState('no');
      props.formData.addData({IsCorrespondenceAddress: "false"})
    }
  };

  console.log('props.formData:', props.formData.getData());

  return (
    <View style={{marginTop: 7, marginLeft: 15, marginRight: 15}}>
      <CorrespondanceAdd formData={props.formData}/>
      <Text style={styles.titleText}>
        Are the correspondence and permanent address same as residential
        address?
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
      {state === 'no' ? <PermanentAdd formData={props.formData}/>: null}
      <EmploymentDetails formData={props.formData}/>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={step2Styles.prevBtn}
          onPress={props.prev}>
          <Text style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={step2Styles.nextBtn} onPress={props.next}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step3;
