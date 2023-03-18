import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../../../../styles/Colors';
import styles from '../../../KYCSteps.styles';
import step2Styles from '../step2Components/Step2.styles';
import {Select, Option} from 'react-native-chooser';
import {PermanentCountry} from '../step2Components/Dropdown';

import GetDropdownOptions from './../../../../../../utils/getDropdownOptions';

const PermanentAdd = (props) => {
  const [countryMenu, setCountnryMenu] = useState(null);
  const [country, setCountry] = useState('Country');

  const [state, setState] = useState('Select Your State');
  const [stateOp, setStateOp] = useState(null);

  const [district, setDistrict] = useState('Select Your District');
  const [districtOp, setDistrictOp] = useState(null);

  const [city, setCity] = useState('Select your town/city');

  const [Street, setStreet] = useState('');
  const [address, setAddress] = useState('');
  const [ward, setWard] = useState('');

  const nepal = () => {
    setCountry('Nepal');
    setCountnryMenu(false);
  };
  const onSelectState = (value, label) => {
    setState(value);
  };
  const onSelectDistrict = (value, label) => {
    setDistrict(value);
  };
  const onSelectCity = (value, label) => {
    setCity(value);
  };

  useEffect(() => {
    GetDropdownOptions('Country')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setCountnryMenu(opList);
        }
      })
      .catch((err) => {
        console.log('Country:', err);
      });

    GetDropdownOptions('State')
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
        console.log('State:', err);
      });

    GetDropdownOptions('District')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const opList = res.data.map((op) => (
            <Option key={op.Value} value={op.Value}>
              {op.Title}
            </Option>
          ));

          setDistrictOp(opList);
        }
      })
      .catch((err) => {
        console.log('District:', err);
      });
  }, [setCountnryMenu, setStateOp, setDistrictOp]);

  useEffect(() => {
    return () => {
      const add = props.formData.getData().KYCAddresses;
      const old = add ? [...add] : [];

      const KYCAddresses = old.filter((add) => add.AddressType !== 'Permanent');

      KYCAddresses.push({
        AddressType: 'Permanent',
        Address: '',
        WardNumber: Street,
        Town: city,
        District: district,
        State: state,
        Country: country,
        Address: address,
        WardNumber: ward,
      });

      props.formData.addData({KYCAddresses});
    };
  }, [props.formData, Street, city, district, state, country, address, ward]);

  return (
    <View style={{marginBottom: 20, marginTop: 20}}>
      <View style={step2Styles.textContainer}>
        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
          Permanent Address
        </Text>
      </View>
      <View style={step2Styles.detailsContainer}>
        <Text style={{fontSize: 20, marginBottom: 10}}>Country</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setCountry(val)}
            defaultText={country}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {countryMenu}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>State</Text>
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

        <Text style={styles.textInputTitle}>District</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setDistrict(val)}
            defaultText={district}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {districtOp}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>Town/ City</Text>
        <View style={step2Styles.dropdown1}>
          <Select
            onSelect={(val) => setCity(val)}
            defaultText={city}
            style={{borderWidth: 0, width: '100%'}}
            textStyle={{fontSize: 17}}
            backdropStyle={{backgroundColor: 'transparent'}}
            optionListStyle={[
              step2Styles.dropdownItem1,
              {height: 'auto', maxHeight: '80%'},
            ]}
            transparent={true}
            selectedStyle={{backgroundColor: 'red'}}>
            {districtOp}
          </Select>
        </View>

        <Text style={styles.textInputTitle}>Street Name/ Tol</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your street name/tol"
            value={Street}
            onChangeText={(street) => setStreet(street)}
          />
        </View>

        <Text style={styles.textInputTitle}>Address</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <Text style={styles.textInputTitle}>Ward</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your ward"
            value={ward}
            onChangeText={setWard}
          />
        </View>
      </View>
    </View>
  );
};

export default PermanentAdd;
