import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../../../../../styles/Colors'

export default StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginRight: 50,
    justifyContent: 'center',
    
  },
  nextBtn: {
    backgroundColor: '#dfa00a',
    borderRadius: 25,
    padding: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#dfa00a',
    borderWidth: 2,
  },
  prevBtn: {
    backgroundColor: 'transparent',
    borderColor: '#dfa00a',
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
    marginRight: 30,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 45,
    backgroundColor: '#dae1e7',
    borderRadius: 8,
    marginBottom: 15,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 50,
    fontSize: 18,
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginBottom: 10,
    marginRight: 5,
  },
 
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 4,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    borderColor: colors.textInputColor,
    borderWidth: 2,
    alignSelf: 'stretch',
    padding: 12
  },
 
  detailsContainer1: {
    borderColor: colors.textInputColor,
    borderWidth: 2,
    alignSelf: 'stretch',
    padding: 12,
    flexDirection:'row',
    marginBottom:-50
  },
  textContainer: {
    padding: 14,
    backgroundColor: colors.primary
  },
  textContainer1: {
    padding: 1,
    backgroundColor: colors.primary,
    
  },
  dropdown: {
    backgroundColor: '#f2f6fa',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 10,
  },
  dropdown1:{
    backgroundColor: '#f2f6fa',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 10,
  },
  icon: {
    position: 'absolute',
    right: 10
  },
  dropdownItem: {
    borderTopWidth: 2,
    backgroundColor: '#f2f6fa',
    padding: 10,
    borderColor: colors.textInputColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 7,
  
  },
  dropdownItem1: {
    borderTopWidth: 2,
    backgroundColor: '#f2f6fa',
    padding: 10,
    borderColor: colors.textInputColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 7,
    width: '80%',
    height: '70%'
  
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  buttonStyle: {
    color: 'red',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green'
},
text:{
  marginLeft: 20,
  fontSize: 20,
  color: 'black',
  // fontStyle: 'italic',
  marginTop: 0,
  marginBottom: 5,
  fontWeight: 'bold'
},
Image:{
  marginTop: 30,
},
text1: {
  marginLeft: 15,
  marginTop: 25,
  fontSize: 15,
  color: 'black',
 justifyContent:'center'

},
input: {
  flex: 1,
  marginLeft:120
  
 
},
logo: {
  marginTop: 10,
  marginLeft: 75,
},

signupText: {
  color: 'black',
  marginTop: '5%',
  fontSize: 17,
  marginLeft:85
 
},
signupText1: {
  color: 'black',
  marginTop: 5,
  fontSize: 17,
  textAlign: "center",
  justifyContent: "center",
  marginBottom: 10,
  marginLeft: 10,
  marginRight:10
},

button: {
  backgroundColor: '#DFA00A',
  borderRadius: 50,
  paddingVertical: 10,
  paddingHorizontal: 12,
  width: '80%',
  marginBottom: 3,
  marginTop:15,
  marginLeft:25
},

buttonText: {
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold',
  alignSelf: 'center',
  
},

pressableText: {
  fontWeight: 'bold',
  marginTop: '3%',
  marginLeft:140
},


});
