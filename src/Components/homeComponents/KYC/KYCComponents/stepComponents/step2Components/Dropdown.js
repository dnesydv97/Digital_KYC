import React from 'react';
import {View, Text, Pressable} from 'react-native';
import step2Styles from './Step2.styles';
import Icon from 'react-native-vector-icons/Entypo';
import {Select, Option} from "react-native-chooser";
import colors from '../../../../../../styles/Colors'

export const Nationality = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.nationality === 'Select your nationality'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.nationality}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      {props.menu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable style={step2Styles.dropdownItem} onPress={props.nepali}>
            <Text style={{fontSize: 19, color: 'black'}}>Nepali</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export const MaritalStatus = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.maritalStatus === 'Select your Marital Status'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.maritalStatus}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      {props.statusMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable style={step2Styles.dropdownItem} onPress={props.single}>
            <Text style={{fontSize: 19, color: 'black'}}>Single</Text>
          </Pressable>
          <Pressable style={step2Styles.dropdownItem} onPress={props.married}>
            <Text style={{fontSize: 19, color: 'black'}}>Married</Text>
          </Pressable>
          <Pressable style={step2Styles.dropdownItem} onPress={props.unmarried}>
            <Text style={{fontSize: 19, color: 'black'}}>Unmarried</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export const Education = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.education === 'Select Your Education'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.education}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      {props.educationMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.attendedUni}>
            <Text style={{fontSize: 19, color: 'black'}}>
              Attended University
            </Text>
          </Pressable>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.attendedSchool}>
            <Text style={{fontSize: 19, color: 'black'}}>Attended School</Text>
          </Pressable>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.uniGraduate}>
            <Text style={{fontSize: 19, color: 'black'}}>
              University Graduate
            </Text>
          </Pressable>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.hsGraduate}>
            <Text style={{fontSize: 19, color: 'black'}}>
              High School Graduate
            </Text>
          </Pressable>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.certification}>
            <Text style={{fontSize: 19, color: 'black'}}>
              Professional Certification
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export const Identification = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.identification === 'Select your Identification Type'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.identification}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      {props.identificationMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.citizenship}>
            <Text style={{fontSize: 19, color: 'black'}}>Citizenship</Text>
          </Pressable>
          <Pressable style={step2Styles.dropdownItem} onPress={props.passport}>
            <Text style={{fontSize: 19, color: 'black'}}>Passport</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};
var department = [
  {id: 1, value: 'Department of Passport, MOFA'},
  {id: 2, value: 'District Administration Office'},
];
export const IssuingAuthority = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.authority === 'Select Issuing Authority'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.authority}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      {/* {props.authorityMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          {department.map(function(dept, index){
            
          })}
        </View>
      )} */}
      {props.authorityMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.deptPassport}>
            <Text style={{fontSize: 19, color: 'black'}}>
              Department of Passport, MOFA
            </Text>
          </Pressable>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.administration}>
            <Text style={{fontSize: 19, color: 'black'}}>
              District Administration Office
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export const Country = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.country === 'Country'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.country}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      
      {props.countryMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.nepal}>
            <Text style={{fontSize: 19, color: 'black'}}>
              Nepal
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};
export const PermanentCountry = (props) => {
  return (
    <View>
      <Pressable style={step2Styles.dropdown} onPress={props.dropdown}>
        <Text
          style={[
            {fontSize: 19},
            props.country === 'Country'
              ? {color: 'gray'}
              : {color: 'black'},
          ]}>
          {props.country}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="gray"
          style={step2Styles.icon}
        />
      </Pressable>
      
      {props.countryMenu === true ? (
        <View style={{flexDirection: 'column'}}>
          <Pressable
            style={step2Styles.dropdownItem}
            onPress={props.nepal}>
            <Text style={{fontSize: 19, color: 'black'}}>
              Nepal
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};


