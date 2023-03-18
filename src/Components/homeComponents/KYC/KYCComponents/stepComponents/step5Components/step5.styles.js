import {StyleSheet} from 'react-native';
import colors from '../../../../../../styles/Colors';

export default StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  textContainer1: {
    padding: 2,
    backgroundColor: colors.primary
  },
});
