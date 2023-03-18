import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import step2Styles from './Step2.styles';
import styles from '../../../KYCSteps.styles';
import {Identification, IssuingAuthority} from './Dropdown';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../../../../styles/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Select, Option} from 'react-native-chooser';

import GetDropdownOptions from './../../../../../../utils/getDropdownOptions';

const IdentificationDetails = (props) => {
  const today = new Date();

  const [identification, setIdentification] = useState(
    'Select your Identification Type',
  );
  const [identificationMenu, setIdentificationMenu] = useState(null);

  const [state, setState] = useState('Place of Issue');
  const [stateOp, setStateOp] = useState(null);

  const [authorityMenu, setAuthorityMenu] = useState(null);
  const [authority, setAuthority] = useState('Select Issuing Authority');

  const [idNumber, setIdNumber] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [date, setDate] = useState(new Date(today));
  const [showCalendar, setShowCalendar] = useState(false);
  const [data, setData] = React.useState({
    Identification: '',
    issuing: '',
    check_textInputChange: false,
    isValidIdentification: true,
    isValidIssuing: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        Identification: val,
        check_textInputChange: true,
        isValidIdentification: true,
      });
    } else {
      setData({
        ...data,
        Identification: val,
        check_textInputChange: false,
        isValidIdentification: false,
      });
    }
  };
  const handleValidIdentification = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidIdentification: true,
      });
    } else {
      setData({
        ...data,
        isValidIdentification: false,
      });
    }
  };

  const textInputChange1 = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        issuing: val,
        check_textInputChange: true,
        isValidIssuing: true,
      });
    } else {
      setData({
        ...data,
        issuing: val,
        check_textInputChange: false,
        isValidIssuing: false,
      });
    }
  };
  const handleValidIssuing = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidIssuing: true,
      });
    } else {
      setData({
        ...data,
        isValidIssuing: false,
      });
    }
  };

  const citizenship = () => {
    setIdentification('Citizenship');
    setIdentificationMenu(false);
  };
  const passport = () => {
    setIdentification('Passport');
    setIdentificationMenu(false);
  };
  const deptPassport = () => {
    setAuthority('Department of Passport, MOFA');
    setAuthorityMenu(false);
  };
  const administration = () => {
    setAuthority('District Administration Office');
    setAuthorityMenu(false);
  };
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfIssue;
    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
    var dateSelected = currentDate
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/');
    console.log(dateSelected);
    setDateOfIssue(dateSelected);
  };

  const onSelect = (value, label) => {
    setState(value);
  };

  useEffect(() => {
    GetDropdownOptions('IDType')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setIdentificationMenu(opList);
        }
      })
      .catch((err) => {
        console.log('IDType:', err);
      });

    GetDropdownOptions('District')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setStateOp(opList);
        }
      })
      .catch((err) => {
        console.log('District:', err);
      });

    GetDropdownOptions('IssueAuthority')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setAuthorityMenu(opList);
        }
      })
      .catch((err) => {
        console.log('IssueAuthority:', err);
      });
  }, [setIdentificationMenu, setAuthorityMenu, setStateOp]);

  useEffect(() => {
    return () => {
      props.formData.addData({
        KYCIdentification: {
          IDType: identification,
          IDNumber: data.Identification,
          IssueDate: dateOfIssue,
          ValidTill: '',
          IssueState: state,
          IssueAuthority: authority,
        },
      });
    };
  }, [props.formData, identification, data, dateOfIssue, state, authority]);

  return (
    <View style={{marginBottom: 20}}>
      <View style={step2Styles.textContainer}>
        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
          Identification Details
        </Text>
      </View>
      <View style={step2Styles.detailsContainer}>
        <Text style={{fontSize: 20, marginBottom: 10}}>Identifiation Type</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setIdentification(val)}
            defaultText={identification}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[step2Styles.dropdownItem1, {height: 'auto'}]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {identificationMenu}
          </Select>
        </View>
        <Text style={styles.textInputTitle}>Identification Number</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textInputStyle}
          placeholder="Enter your identification number"
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidIdentification(e.nativeEvent.text)}
        />
        {data.isValidIdentification ? null : (
          <Text style={{color: '#FF0000', fontSize: 14}}>
            enter your id number
          </Text>
        )}
        <Text style={styles.textInputTitle}>Place of Issue</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setState(val)}
            defaultText={state}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {stateOp}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>Issuing Authority</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setAuthority(val)}
            defaultText={authority}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {authorityMenu}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>Date of Issue</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Select date of issue"
            value={dateOfIssue}
            onChangeText={(date) => setDateOfIssue(date)}
            onFocus={() => setShowCalendar(true)}
          />
          <Icon
            name="calendar"
            size={25}
            color={colors.primary}
            style={[step2Styles.icon, {top: 13}]}
          />
          {showCalendar ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default IdentificationDetails;
