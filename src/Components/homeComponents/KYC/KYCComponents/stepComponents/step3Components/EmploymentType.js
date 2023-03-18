import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../KYCSteps.styles';
import step2Styles from '../step2Components/Step2.styles'
import colors from '../../../../../../styles/Colors'
import step1Styles from '../step1Components/Step1.styles'

const EmploymentType = (props) => {
    const [salaried1, setSalaried1] = useState(false)
    const [retired1, setRetired1] = useState(false)
    const [salaried2, setSalaried2] = useState(false)
    const [retired2, setRetired2] = useState(false)
    const [salaried3, setSalaried3] = useState(false)
    const [retired3, setRetired3] = useState(false)
    const [salaried4, setSalaried4] = useState(false)
    const [icon1, setIcon1] = useState(false)
    const [icon2, setIcon2] = useState(false)
    const [icon3, setIcon3] = useState(false)
    const [icon4, setIcon4] = useState(false)
    const [icon5, setIcon5] = useState(false)
    const [icon6, setIcon6] = useState(false)
    const [icon7, setIcon7] = useState(false)
    const handlePress1 = () => {
        setSalaried1(!salaried1)
        setIcon1(!icon1)
    }
    const handlePress2 = () => {
        setRetired1(!retired1)
        setIcon2(!icon2)
    }
    const handlePress3 = () => {
        setSalaried2(!salaried2)
        setIcon3(!icon3)
    }
    const handlePress4 = () => {
        setRetired2(!retired2)
        setIcon4(!icon4)
    }
    const handlePress5 = () => {
        setSalaried3(!salaried3)
        setIcon5(!icon5)
    }
    const handlePress6 = () => {
        setRetired3(!retired3)
        setIcon6(!icon6)
    }
    const handlePress7 = () => {
        setSalaried4(!salaried4)
        setIcon7(!icon7)
    }
    return (
        <View style = {{marginTop: 5, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 10}}>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress1()}>
                <CheckBox name = {icon1 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary}/>
                <Text style = {styles.descriptionText}>Salaried</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress2()}>
                <CheckBox name = {icon2 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary} />
                <Text style = {styles.descriptionText}>Retired</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress3()}>
                <CheckBox name = {icon3 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary}/>
                <Text style = {styles.descriptionText}>Salaried</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress4()}>
                <CheckBox name = {icon4 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary}/>
                <Text style = {styles.descriptionText}>Retired</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress5()}>
                <CheckBox name = {icon5 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary}/>
                <Text style = {styles.descriptionText}>Salaried</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress6()}>
                <CheckBox name = {icon6 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary}/>
                <Text style = {styles.descriptionText}>Retired</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingLeft: 0}} onPress = {() => handlePress7()}>
                <CheckBox name = {icon7 === true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color = {colors.primary}/>
                <Text style = {styles.descriptionText}>Salaried</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmploymentType
