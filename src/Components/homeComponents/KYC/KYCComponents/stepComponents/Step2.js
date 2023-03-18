// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   KeyboardAvoidingView,
//   Image,
// } from 'react-native';
// import styles from '../../KYCSteps.styles';
// import step2Styles from './step2Components/Step2.styles';
// import GenderCheckbox from './step2Components/GenderCheckbox';
// import Icon from 'react-native-vector-icons/Feather';
// import colors from '../../../../../styles/Colors';
// import AcceptTermsCheckBox from './step2Components/AcceptTermsCheckBox';
// import TermsAndConditions from './step2Components/TermsAndConditions';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import PersonalDetails from './step2Components/PersonalDetails';
// import FamilyDetails from './step2Components/FamilyDetails';
// import IdentificationDetails from './step2Components/IdentificationDetails';

// const Step2 = (props) => {
//   const today = new Date();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selected, setSelected] = useState(false);
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [date, setDate] = useState(new Date(today));
//   const [screen, setScreen] = useState('first-screen');

//   const onChangeDate = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowCalendar(Platform.OS === 'ios');
//     setDate(currentDate);
//     console.log(currentDate);
//     var dateSelected = currentDate
//       .toISOString()
//       .replace('-', '/')
//       .split('T')[0]
//       .replace('-', '/');
//     console.log(dateSelected);
//     setDob(dateSelected);
//   };

//   return (
//     <View style={{marginTop: 7, marginLeft: 15, marginRight: 15}}>
//       {screen === 'first-screen' ? (
//         <View>
//           <Text style={styles.titleText}>Personal Details</Text>
//           <View>
//             <Text style={{fontSize: 17, marginBottom: 7}}>Full Name *</Text>
//             <View style={step2Styles.inputContainer}>
//               <TextInput
//                 style={step2Styles.textInputStyle}
//                 placeholder="Full Name"
//                 value={name}
//                 onChangeText={(name) => setName(name)}></TextInput>
//               <Icon
//                 name="user"
//                 size={25}
//                 color={colors.primary}
//                 style={{position: 'absolute', marginLeft: 8, top: 9}}
//               />
//             </View>
//             <Text style={{fontSize: 17, marginBottom: 7}}>Date of Birth *</Text>
//             <View style={step2Styles.inputContainer}>
//               <TextInput
//                 placeholder="Date of Birth"
//                 style={step2Styles.textInputStyle}
//                 value={dob}
//                 onChangeText={(dob) => setDob(dob)}
//                 onFocus={() => setShowCalendar(true)}></TextInput>
//               <Icon
//                 name="calendar"
//                 size={25}
//                 color={colors.primary}
//                 style={{position: 'absolute', marginLeft: 8, top: 9}}
//               />
//             </View>

//             {showCalendar ? (
//               <DateTimePicker
//                 testID="dateTimePicker"
//                 value={date}
//                 mode="date"
//                 is24Hour={true}
//                 display="default"
//                 onChange={onChangeDate}
//               />
//             ) : null}

//             <Text style={{fontSize: 17, marginBottom: 7}}>Mobile Number *</Text>
//             <View style={step2Styles.inputContainer}>
//               <TextInput
//                 placeholder="Mobile Number"
//                 style={step2Styles.textInputStyle}
//                 value={mobile}
//                 onChangeText={(mobile) => setMobile(mobile)}></TextInput>
//               <Icon
//                 name="phone"
//                 size={25}
//                 color={colors.primary}
//                 style={{position: 'absolute', marginLeft: 8, top: 9}}
//               />
//             </View>

//             <Text style={{fontSize: 17, marginBottom: 7}}>E-mail Id *</Text>
//             <View style={step2Styles.inputContainer}>
//               <TextInput
//                 placeholder="Email Address"
//                 style={step2Styles.textInputStyle}
//                 value={email}
//                 onChangeText={(email) => setEmail(email)}></TextInput>
//               <Icon
//                 name="mail"
//                 size={25}
//                 color={colors.primary}
//                 style={{position: 'absolute', marginLeft: 8, top: 9}}
//               />
//             </View>
//             <Text style={{fontSize: 17, marginBottom: 7}}>Gender</Text>
//             <GenderCheckbox />
//             <AcceptTermsCheckBox
//               toggleModal={() => setModalVisible(!isModalVisible)}
//               selection={selected}
//               unCheckBox={() => setSelected(!selected)}
//             />
//             <TermsAndConditions
//               visibility={isModalVisible}
//               closeModal={() => setModalVisible(!isModalVisible)}
//               acceptTerms={() => {
//                 setSelected(!selected);
//                 setModalVisible(!isModalVisible);
//               }}
//             />
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <TouchableOpacity style={step2Styles.prevBtn} onPress={props.prev}>
//               <Text
//                 style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
//                 Back
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               // style={[{ borderRadius: 25, padding: 10, alignSelf: 'stretch', alignItems: 'center'}, selected ? {backgroundColor: colors.secondary} : {backgroundColor: 'gray'}]}
//               style={[
//                 step2Styles.nextBtn,
//                 selected
//                   ? {backgroundColor: colors.secondary}
//                   : {backgroundColor: 'gray', borderColor: 'gray'},
//               ]}
//               onPress={() => setScreen('second-screen')}
//               disabled={selected ? false : true}>
//               <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
//                 Next
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <View style={step2Styles.box}>
//           <View
//             style={{flexDirection: 'column', marginTop: 25, marginLeft: 10}}>
//             <Text style={step2Styles.text}>
//               Do you want to fill form yourself?
//             </Text>

//             <Image
//               source={require('../../../../../assets/satrter2.png')}
//               style={step2Styles.Image}
//             />
//           </View>
//           <Text style={step2Styles.text1}>
//             Form can be filled by yourself or bank representative can do it for
//             while at meeting.
//           </Text>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 30,
//             }}>
//             <TouchableOpacity
//               style={step2Styles.prevBtn}
//               onPress={() => setScreen('first-screen')}>
//               <Text
//                 style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
//                 Let bank fill
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={step2Styles.nextBtn} onPress={props.next}>
//               <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
//                 I want fill
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Step2;

// // <View>
// // <PersonalDetails />
// // <FamilyDetails />
// // <IdentificationDetails />
// // <View
// //   style={{
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   }}>
// //   <TouchableOpacity
// //     style={step2Styles.prevBtn}
// //     onPress={() => setScreen('first-screen')}>
// //     <Text
// //       style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
// //       Back
// //     </Text>
// //   </TouchableOpacity>
// //   <TouchableOpacity
// //     style={step2Styles.nextBtn}
// //     onPress={props.next}>
// //     <Text
// //       style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
// //       Next
// //     </Text>
// //   </TouchableOpacity>
// // </View>
// // </View>

// {/* fill form screen
// <View style={step2Styles.box}>
//           <View
//             style={{flexDirection: 'column', marginTop: 25, marginLeft: 10}}>
//             <Text style={step2Styles.text}>
//               Do you want to fill form yourself?
//             </Text>

//             <Image
//               source={require('../../../../../assets/satrter2.png')}
//               style={step2Styles.Image}
//             />
//           </View>
//           <Text style={step2Styles.text1}>
//             Form can be filled by yourself or bank representative can do it for
//             while at meeting.
//           </Text>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 30,
//             }}>
//             <TouchableOpacity
//               style={step2Styles.prevBtn}
//               onPress={() => setScreen('first-screen')}>
//               <Text
//                 style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
//                 Let bank fill
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={step2Styles.nextBtn} onPress={props.next}>
//               <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
//                 I want fill
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>

// */}

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,Pressable
} from 'react-native';
import styles from '../../KYCSteps.styles';
import step2Styles from './step2Components/Step2.styles';
import GenderCheckbox from './step2Components/GenderCheckbox';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../../../styles/Colors';
import AcceptTermsCheckBox from './step2Components/AcceptTermsCheckBox';
import TermsAndConditions from './step2Components/TermsAndConditions';
import DateTimePicker from '@react-native-community/datetimepicker';
import PersonalDetails from './step2Components/PersonalDetails';
import FamilyDetails from './step2Components/FamilyDetails';
import IdentificationDetails from './step2Components/IdentificationDetails';

const Step2 = (props) => {
  const today = new Date();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date(today));
  const [screen, setScreen] = useState('first-screen');
  const navigate = props.navigation;
  const [inputValue, setInputValue] = useState('');
  const [number, onChangeNumber] = React.useState(null);
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
    var dateSelected = currentDate
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/');
    console.log(dateSelected);
    setDob(dateSelected);
  };
  const [data, setData] = React.useState({
    name: '',
    number: '',
    gmail: '',
    check_textInputChange: false,
    isValidname: true,
    isValidNumber: true,
    isValidGmail: true,
  });
  const textInputChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        name: val,
        check_textInputChange: true,
        isValidname: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_textInputChange: false,
        isValidname: false,
      });
    }
  };

  const handleNumberChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        number: val,
        isValidNumber: true,
      });
    } else {
      setData({
        ...data,
        number: val,
        isValidNumber: false,
      });
    }
  };
  const textInputChange1 = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        number: val,
        check_textInputChange: true,
        isValidNumber: true,
      });
    } else {
      setData({
        ...data,
        number: val,
        check_textInputChange: false,
        isValidNumber: false,
      });
    }
  };
  const handleValidname = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        isValidname: true,
      });
    } else {
      setData({
        ...data,
        isValidname: false,
      });
    }
  };
  const textInputChange2 = (val) => {
    if (val.trim().length >= 14) {
      setData({
        ...data,
        gmail: val,
        check_textInputChange: true,
        isValidGmail: true,
      });
    } else {
      setData({
        ...data,
        gmail: val,
        check_textInputChange: false,
        isValidGmail: false,
      });
    }
  };

  const handleGmail = (val) => {
    if (val.trim().length >= 14) {
      setData({
        ...data,
        gmail: val,
        isValidGmail: true,
      });
    } else {
      setData({
        ...data,
        gmail: val,
        isValidGmail: false,
      });
    }
  };
  return (
    <View style={{marginTop: 7, marginLeft: 15, marginRight: 15}}>
      {screen === 'first-screen' ? (
        <View>
          <Text style={styles.titleText}>Personal Details</Text>
          <View>
            <Text style={{fontSize: 17, marginBottom: 7}}>Full Name *</Text>
            <View style={step2Styles.inputContainer}>
              <TextInput
                style={step2Styles.textInputStyle}
                placeholder="Full Name"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidname(e.nativeEvent.text)}
              />
              <Icon
                name="user"
                size={25}
                color={colors.primary}
                style={{position: 'absolute', marginLeft: 8, top: 9}}
              />
            </View>
            {data.isValidname ? null : (
              <Text style={{color: '#FF0000', fontSize: 14,marginBottom:10}}>
                Please Provide Valid Full Name
              </Text>
            )}
            <Text style={{fontSize: 17, marginBottom: 7}}>Date of Birth *</Text>
            <View style={step2Styles.inputContainer}>
              <TextInput
                placeholder="Date of Birth"
                style={step2Styles.textInputStyle}
                value={dob}
                onChangeText={(dob) => {
                  setDob(dob);
                }}
                onFocus={() => setShowCalendar(true)}></TextInput>
              <Icon
                name="calendar"
                size={25}
                color={colors.primary}
                style={{position: 'absolute', marginLeft: 8, top: 9}}
              />
            </View>

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

            <Text style={{fontSize: 17, marginBottom: 7}}>Mobile Number *</Text>
            <View style={step2Styles.inputContainer}>
              <TextInput
                placeholder="Mobile Number"
                style={step2Styles.textInputStyle}
                keyboardType="numeric"
                maxLength={10}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange1(val)}
                onEndEditing={(e) => handleNumberChange(e.nativeEvent.text)}
              />
              <Icon
                name="phone"
                size={25}
                color={colors.primary}
                style={{position: 'absolute', marginLeft: 8, top: 9}}
              />
            </View>
            {data.isValidNumber ? null : (
              <Text style={{color: '#FF0000', fontSize: 14, marginBottom:10}}>
                Please Enter Valid Number
              </Text>
            )}
            <Text style={{fontSize: 17, marginBottom: 7}}>E-mail Id *</Text>
            <View style={step2Styles.inputContainer}>
              <TextInput
                placeholder="Email Address"
                style={step2Styles.textInputStyle}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(val) => textInputChange2(val)}
                onEndEditing={(e) => handleGmail(e.nativeEvent.text)}
              />
              <Icon
                name="mail"
                size={25}
                color={colors.primary}
                style={{position: 'absolute', marginLeft: 8, top: 9}}
              />
            </View>
            {data.isValidGmail ? null : (
              <Text style={{color: '#FF0000', fontSize: 14, marginBottom:10}}>
                Please Enter Valid Gmail
              </Text>
            )}
            <Text style={{fontSize: 17, marginBottom: 7}}>Gender</Text>

            <GenderCheckbox formData={props.formData} />

            <AcceptTermsCheckBox
              toggleModal={() => setModalVisible(!isModalVisible)}
              selection={selected}
              unCheckBox={() => setSelected(!selected)}
            />
            <TermsAndConditions
              visibility={isModalVisible}
              closeModal={() => setModalVisible(!isModalVisible)}
              acceptTerms={() => {
                setSelected(!selected);
                setModalVisible(!isModalVisible);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={step2Styles.prevBtn} onPress={props.prev}>
              <Text
                style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // style={[{ borderRadius: 25, padding: 10, alignSelf: 'stretch', alignItems: 'center'}, selected ? {backgroundColor: colors.secondary} : {backgroundColor: 'gray'}]}
              style={[
                step2Styles.nextBtn,
                selected
                  ? {backgroundColor: colors.secondary}
                  : {backgroundColor: 'gray', borderColor: 'gray'},
              ]}
              onPress={() => {
                setScreen('second-screen');
                props.formData.addData({
                  CustomerName: data.name,
                  DOB: dob,
                  PhoneNumber: data.number,
                  EmailAddress: data.gmail,
                });
              }}
              disabled={selected ? false : true}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )  : screen === 'second-screen' ? (
        <View>
     
       
     <View>
     <Image
            style={step2Styles.logo}
            source={require('../../../../../assets/verification.png')}
          />

<Text style={step2Styles.signupText}>Verification Code</Text>
          <Text style={step2Styles.signupText1}>
            {' '}
            Please enter verification code sent to you via email
          </Text>

          <TextInput
            style={step2Styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter pin"
            keyboardType="numeric"
            maxLength={4}
          />
          <TouchableOpacity
            style={step2Styles.button}
            onPress={() => setScreen('third-screen')}>
          
            <Text style={step2Styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          <Pressable
           onPress={() => handleSkip()}
          >
            <Text style={step2Styles.pressableText}>Resend</Text>
          </Pressable>
        </View>
     
    </View>
      ) 
      : screen === 'third-screen' ? (
        <View style={step2Styles.box}>
          <View
            style={{flexDirection: 'column', marginTop: 25, marginLeft: 10}}>
            <Text style={step2Styles.text}>
              Do you want to fill form yourself?
            </Text>

            <Image
              source={require('../../../../../assets/satrter2.png')}
              style={step2Styles.Image}
            />
          </View>
          <Text style={step2Styles.text1}>
            Form can be filled by yourself or bank representative can do it for
            while at meeting.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={step2Styles.prevBtn}
              onPress={props.NewStep}>
              <Text
                style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
                Let bank fill
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={step2Styles.nextBtn}
              onPress={() => setScreen('fourth-screen')}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                I want fill
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <PersonalDetails formData={props.formData} />
          <FamilyDetails formData={props.formData} />
          <IdentificationDetails formData={props.formData} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={step2Styles.prevBtn}
              onPress={() => setScreen('first-screen')}>
              <Text
                style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
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
      )}
    </View>
  );
};

export default Step2;

// <View>
// <PersonalDetails />
// <FamilyDetails />
// <IdentificationDetails />
// <View
//   style={{
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//   <TouchableOpacity
//     style={step2Styles.prevBtn}
//     onPress={() => setScreen('first-screen')}>
//     <Text
//       style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
//       Back
//     </Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={step2Styles.nextBtn}
//     onPress={props.next}>
//     <Text
//       style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
//       Next
//     </Text>
//   </TouchableOpacity>
// </View>
// </View>

{
  /* fill form screen
<View style={step2Styles.box}>
          <View
            style={{flexDirection: 'column', marginTop: 25, marginLeft: 10}}>
            <Text style={step2Styles.text}>
              Do you want to fill form yourself?
            </Text>

            <Image
              source={require('../../../../../assets/satrter2.png')}
              style={step2Styles.Image}
            />
          </View>
          <Text style={step2Styles.text1}>
            Form can be filled by yourself or bank representative can do it for
            while at meeting.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={step2Styles.prevBtn}
              onPress={() => setScreen('first-screen')}>
              <Text
                style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 20}}>
                Let bank fill
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={step2Styles.nextBtn} onPress={props.next}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                I want fill
              </Text>
            </TouchableOpacity>
          </View>
        </View>


*/
}
