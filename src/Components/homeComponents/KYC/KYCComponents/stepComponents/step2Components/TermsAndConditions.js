import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import step2Styles from './Step2.styles';

const TermsAndConditions = (props) => {
  const [state, setState] = useState('first modal');
  const [code, setCode] = useState('');

  return (
    <Modal visible={props.visibility} transparent={true}>
      <View
        style={{
          backgroundColor: '#ffffffaa',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f2f6fa',
            margin: 30,
            padding: 20,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.4,
            shadowRadius: 3.84,

            elevation: 18,
          }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text style={step2Styles.titleText}>Terms and conditions</Text>
             
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <TouchableOpacity onPress={props.closeModal}>
                    <Icon name="close" color="gray" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={step2Styles.horizontalLine} />

              <ScrollView>
                <Text>
                  Lorem ipsum dolor sit amet, has movet voluptatum no, nibh
                  commodo scripta et est. Meliore repudiare his id. Per utinam
                  evertitur cu, movet aperiri ad sea. Cu quis reque mel, quo
                  nullam eligendi cu, ea sed homero utamur feugait. Ex pro suas
                  similique, no vis mutat expetendis. Id inermis dolorem
                  qualisque eam, no sed meis augue decore. Ea usu wisi solum
                  phaedrum, ex oblique instructior est, option senserit eum ex.
                  Mea eloquentiam signiferumque ea, id usu augue dicit
                  mediocrem. Vel ne salutandi sadipscing. Autem nonumes
                  postulant te ius, duo error utinam pericula ad. Saperet
                  consequat scribentur ex eos. Cu erat suscipit indoctum vix, an
                  sale nulla integre quo. Wisi postea cu nec, vix paulo denique
                  appellantur ea, viris argumentum mea no. Id mel quis alii
                  zril, sea velit facete at, in nam ubique alienum detraxit.
                  Euripidis intellegebat ne nam, dicant eleifend pertinacia no
                  pri. In per sint discere. Ei ius vitae denique. Eos illud
                  graecis no, sit ex putant fierent scaevola. Id qui euismod
                  alienum persequeris. Te ius viderer euismod ocurreret, at
                  contentiones necessitatibus usu. Cetero molestiae ei mea,
                  nominavi oportere te quo. Eos ut nostro blandit, qui cu
                  accusam dolores albucius. Ignota instructior in vis, cu eos
                  noster melius, equidem oportere eu his. An per partem tempor
                  docendi. Mei ad aeque admodum, sea eu ignota evertitur. In cum
                  putant tamquam. Cu vis mollis volumus.
                </Text>
              </ScrollView>

              <TouchableOpacity
                style={{
                  backgroundColor: '#dfa00a',
                  borderRadius: 25,
                  padding: 10,
                  alignSelf: 'stretch',
                  alignItems: 'center',
                }}
                onPress={props.acceptTerms}>
                <Text style={{color: 'white', fontSize: 15}}>
                  Proceed to Account Opening Form
                </Text>
              </TouchableOpacity>

        
        </View>
      </View>
    </Modal>
  );
};

export default TermsAndConditions;
