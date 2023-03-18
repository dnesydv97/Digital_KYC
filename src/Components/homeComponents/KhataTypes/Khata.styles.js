import {StyleSheet} from 'react-native';
import colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: colors.textInputColor,
    padding: -10,
  },
  items: {
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 2,
    borderRadius: 27,
    borderColor: colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 9,
    paddingBottom: 9,
    marginRight: 8,
    marginLeft:5,
    marginTop:5


  },
  detailContainer: {
    flex: 6,
  },
  khataTitle: {
      fontWeight: 'bold',
      fontSize: 18
  },
  horizontalLine: {
    borderBottomColor: colors.textInputColor,
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 10
  },
  learnMoreButton: {
    paddingTop: 3,
    paddingBottom: 2,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 25,
    flexDirection: 'row',
    borderColor: colors.secondary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 5
  },
  learnMoreButtonText: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10
  },
  applyButton: {
    paddingTop: 3,
    paddingBottom: 2,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 25,
    marginBottom:5
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10
  }
});
