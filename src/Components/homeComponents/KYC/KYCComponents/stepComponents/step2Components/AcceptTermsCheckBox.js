import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../../../styles/Colors'

const AcceptTermsCheckBox = (props) => {
    
    return (
        <View style = {{flexDirection: 'row', marginBottom: 20}}>
            <TouchableOpacity
           style = {{flexDirection: 'row'}}
            onPress = {props.selection === false ? props.toggleModal : props.unCheckBox}
            >
                {props.selection ? (<CheckBox name="checkbox-marked" size={25} color = {colors.primary}/> ) : (<CheckBox name="checkbox-blank-outline" size={25} color = {colors.primary} />)}
               
           
            <Text style = {{marginLeft: 10}}>I agree to the terms and conditions.</Text>
          
            </TouchableOpacity>
        </View>
    )
}

export default AcceptTermsCheckBox
