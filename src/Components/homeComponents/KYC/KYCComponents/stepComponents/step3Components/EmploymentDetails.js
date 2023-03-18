import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../KYCSteps.styles';
import step2Styles from '../step2Components/Step2.styles';
import colors from '../../../../../../styles/Colors';
import EmploymentType from './EmploymentType';
import Button from '../step1Components/Checkbox';
import {Select, Option} from 'react-native-chooser';

import GetDropdownOptions from './../../../../../../utils/getDropdownOptions';

const EmploymentDetails = (props) => {
  const [empType, setEmpType] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [purpose, setPurpose] = useState('Purpose');
  const [purposeOp, setPurposeOp] = useState(null);

  const [source, setSource] = useState('Source of Funds');
  const [sourceOp, setSourceOp] = useState(null);

  const [income, setIncome] = useState('');
  const [isChecked, setIsChecked] = useState([
    {id: 1, value: false, name: 'Salaried', selected: false},
    {id: 2, value: true, name: 'Retired', selected: false},
    {id: 3, value: false, name: 'Salaried', selected: false},
    {id: 4, value: false, name: 'Retired', selected: false},
    {id: 5, value: false, name: 'Salaried', selected: false},
    {id: 6, value: false, name: 'Retired', selected: false},
    {id: 7, value: false, name: 'Salaried', selected: false},
  ]);
  const onBtnClick = (item) => {
    let updatedState = isChecked.map((isCheckedItem) =>
      isCheckedItem.id === item.id
        ? {...isCheckedItem, selected: true}
        : {...isCheckedItem, selected: false},
    );
    setIsChecked(updatedState);
  };

  useEffect(() => {
    GetDropdownOptions('Purpose')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setPurposeOp(opList);
        }
      })
      .catch((err) => {
        console.log('Purpose:', err);
      });

    GetDropdownOptions('Sourceoffund')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setSourceOp(opList);
        }
      })
      .catch((err) => {
        console.log('Sourceoffund:', err);
      });
  }, [setPurposeOp, setSourceOp]);

  useEffect(() => {
    return () => {
      props.formData.addData({
        EmploymentType: empType,
        YearlyIncome: income,
        CompanyName: name,
        Purpose: purpose,
        SourceOfFund: source,
      });
    };
  }, [props.formData, empType, name, income, purpose, source]);

  return (
    <View style={{marginBottom: 20, marginTop: 20}}>
      <View style={step2Styles.textContainer}>
        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
          Employment Details
        </Text>
      </View>

      <View style={step2Styles.detailsContainer}>
        {/* <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          {isChecked.map((item) => (
            <Button
              onPress={() => onBtnClick(item)}
              selected={item.selected}
              key={item.id}>
              {item.name}
            </Button>
          ))}
        </View> */}

        <Text style={{fontSize: 20, marginBottom: 10}}>Employment Type</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter employment type"
          value={empType}
          onChangeText={setEmpType}
        />

        <Text style={{fontSize: 20, marginBottom: 10}}>Office Name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter office name"
          value={name}
          onChangeText={(name) => setName(name)}
        />

        <Text style={styles.textInputTitle}>Office Address</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your office address"
          value={address}
          onChangeText={(address) => setAddress(address)}
        />

        <Text style={styles.textInputTitle}>Purpose</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setPurpose(val)}
            defaultText={purpose}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {purposeOp}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>Source of Funds</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setSource(val)}
            defaultText={source}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {sourceOp}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>Estimated Annual Income</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your annual Income"
            value={income}
            onChangeText={(income) => setIncome(income)}
          />
        </View>
      </View>
    </View>
  );
};

export default EmploymentDetails;
