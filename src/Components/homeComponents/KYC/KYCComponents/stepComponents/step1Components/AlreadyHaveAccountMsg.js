import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../../../../../styles/Colors";
import styles from '../../../KYCSteps.styles'
import step1Styles from './Step1.styles'

const AlreadyHaveAccountMsg = () => {
    return (
        <View style = {step1Styles.alreadyHaveAccountMsg}>
            <View style = {{flexDirection: 'row'}}>
            <Icon name = 'do-not-disturb' size = {30} color = {colors.error} />
            <Text style = {[styles.titleText, {marginTop: 0, marginLeft: 10}]}>Already have account</Text>
            </View>
            <Text style = {{fontSize: 20}}>As per NRB Directive Section Number 21.45, A natural person cannot open more than one account of same nature (saving). For more information, please contact our customer care centre (No. 5970015)</Text>
        </View>
    )
}

export default AlreadyHaveAccountMsg
