import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import step2Styles from './Step2.styles';
import styles from '../../../KYCSteps.styles';

const FamilyDetails = (props) => {
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [grandfatherName, setGrandfatherName] = useState('');
  const [fatherInLawName, setFatherInLawName] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [data, setData] = React.useState({
    father: '',
    mother: '',
    grandfather: '',
    fatherinlaw: '',
    spouse: '',
    check_textInputChange: false,
    isValidFather: true,
    isValidMother: true,
    isValidGrandfather: true,
    isValidFatherinlaw: true,
    isValidSpouse: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        father: val,
        check_textInputChange: true,
        isValidFather: true,
      });
    } else {
      setData({
        ...data,
        father: val,
        check_textInputChange: false,
        isValidFather: false,
      });
    }
  };
  const handleValidfather = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidfather: true,
      });
    } else {
      setData({
        ...data,
        isValidfather: false,
      });
    }
  };

  const textInputChange1 = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        mother: val,
        check_textInputChange: true,
        isValidMother: true,
      });
    } else {
      setData({
        ...data,
        mother: val,
        check_textInputChange: false,
        isValidMother: false,
      });
    }
  };
  const handleValidMother = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidMother: true,
      });
    } else {
      setData({
        ...data,
        isValidMother: false,
      });
    }
  };
  const textInputChange2 = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        grandfather: val,
        check_textInputChange: true,
        isValidGrandfather: true,
      });
    } else {
      setData({
        ...data,
        grandfather: val,
        check_textInputChange: false,
        isValidGrandfather: false,
      });
    }
  };
  const handleValidGrandfather = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidGrandfather: true,
      });
    } else {
      setData({
        ...data,
        isValidGrandfather: false,
      });
    }
  };
  const textInputChange3 = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        fatherinlaw: val,
        check_textInputChange: true,
        isValidFatherinlaw: true,
      });
    } else {
      setData({
        ...data,
        fatherinlaw: val,
        check_textInputChange: false,
        isValidFatherinlaw: false,
      });
    }
  };
  const handleValidfatherinlaw = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidfatherinlaw: true,
      });
    } else {
      setData({
        ...data,
        isValidfatherinlaw: false,
      });
    }
  };
  const textInputChange4 = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        spouse: val,
        check_textInputChange: true,
        isValidSpouse: true,
      });
    } else {
      setData({
        ...data,
        spouse: val,
        check_textInputChange: false,
        isValidSpouse: false,
      });
    }
  };
  const handleValidspouse = (val) => {
    if (val.trim().length >= 7) {
      setData({
        ...data,
        isValidspouse: true,
      });
    } else {
      setData({
        ...data,
        isValidspouse: false,
      });
    }
  };

  useEffect(() => {
    return () => {
      props.formData.addData({
        FatherFullName: data.father,
        MotherFullName: data.mother,
        GrandfatherFullName: data.grandfather,
        FatherinlawFullName: data.fatherinlaw,
        SpouseFullName: data.spouse,
      });
    };
  }, [data, props.formData]);

  return (
    <View style={{marginBottom: 20}}>
      <View style={step2Styles.textContainer}>
        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
          Family Details
        </Text>
      </View>
      <View style={step2Styles.detailsContainer}>
        <Text style={styles.textInputTitle}>Father's Full Name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your father's full name"
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidfather(e.nativeEvent.text)}
        />
        {data.isValidFather ? null : (
          <Text style={{color: '#FF0000', fontSize: 14}}>
            Enter Your Father Name
          </Text>
        )}
        <Text style={styles.textInputTitle}>Mother's Full Name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your mother's full name"
          onChangeText={(val) => textInputChange1(val)}
          onEndEditing={(e) => handleValidMother(e.nativeEvent.text)}
        />
        {data.isValidMother ? null : (
          <Text style={{color: '#FF0000', fontSize: 14}}>
           Enter Your Mother Name
          </Text>
        )}
        <Text style={styles.textInputTitle}>Grandfather's Full Name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your grandfather's full name"
          onChangeText={(val) => textInputChange2(val)}
          onEndEditing={(e) => handleValidGrandfather(e.nativeEvent.text)}
        />
        {data.isValidGrandfather ? null : (
          <Text style={{color: '#FF0000', fontSize: 14}}>
            Enter Your Grand-Father Name
          </Text>
        )}
        <Text style={styles.textInputTitle}>Father-in-law's full name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your father-in-law's full name"
          onChangeText={(val) => textInputChange3(val)}
          onEndEditing={(e) => handleValidfatherinlaw(e.nativeEvent.text)}
        />
        {data.isValidFatherinlaw ? null : (
          <Text style={{color: '#FF0000', fontSize: 14}}>
          Enter Your Father-In-Law Name
          </Text>
        )}
        <Text style={styles.textInputTitle}>Spouse's Full Name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your Spouse's Full Name"
          onChangeText={(val) => textInputChange4(val)}
          onEndEditing={(e) => handleValidspouse(e.nativeEvent.text)}
        />
        {data.isValidSpouse ? null : (
          <Text style={{color: '#FF0000', fontSize: 14}}>
            Enter Your Spouse Name
          </Text>
        )}
      </View>
    </View>
  );
};

export default FamilyDetails;
