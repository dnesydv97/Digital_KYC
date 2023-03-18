import {StyleSheet} from 'react-native';
import colors from '../../../styles/Colors';

export default StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftHorizontalLine: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 4,
    flex: 2,
    marginLeft: '30%',
    marginRight: 8,
  },

  dot: {
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 6,
  },

  rightHorizontalLine: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 4,
    flex: 2,
    marginLeft: 8,
    marginRight: '30%',
  },
});
