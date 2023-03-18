import {StyleSheet} from 'react-native';
import colors from '../../../../../../styles/Colors';

export default StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginRight: 50,
    justifyContent: 'center',
  },
  servicesBox: {
    position: 'relative',
    marginBottom: 100,
    marginTop: 5,
    flexWrap: 'wrap',
  },
  bgText: {
    position: 'absolute',
    top: 0,
    fontSize: 100,
    fontWeight: '700',
    color: 'rgba(46, 56, 58, 0.1)',
  },
  headingMedium: {
    position: 'absolute',
    top: 55,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  fadedText: {
    position: 'absolute',
    fontSize: 14,
    color: 'gray',
    top: 90,
    flexWrap: 'wrap',
  },
  alreadyHaveAccountMsg: {
    margin: 10,
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colors.textInputColor,
    paddingBottom: 30,
    paddingTop: 30,
    borderRadius: 10,
    marginBottom: 30
  },
});
