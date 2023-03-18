import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../KYCSteps.styles';
import step2Styles from './Step2.styles'
import colors from '../../../../../../styles/Colors'

const Button = ({onPress, selected, children}) => {
  return (
    <View style={step2Styles.checkBoxContainer}>
      <TouchableOpacity onPress={onPress} style = {{marginRight: 12}}>
        {selected ? (
          <CheckBox name="checkbox-marked" size={25} color = {colors.primary}/>
        ) : (
          <CheckBox name="checkbox-blank-outline" size={25} color = {colors.primary} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.descriptionText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const GenderCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState([
    {id: 1, value: true, name: 'Male', selected: false},
    {id: 2, value: false, name: 'Female', selected: false},
    {id: 3, value: false, name: 'Other', selected: false},
  ]);
  const onBtnClick = (item) => {
    let updatedState = isChecked.map((isCheckedItem) => {

      if (isCheckedItem.id === item.id) {

        props.formData.addData({Gender:isCheckedItem.name})
        return {...isCheckedItem, selected: true}
      } else {
        return {...isCheckedItem, selected: false}
      }

    }
    );
    setIsChecked(updatedState);
  };
  return (
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
  );
};

export default GenderCheckbox;
