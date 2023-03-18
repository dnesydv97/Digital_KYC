import { StyleSheet } from 'react-native';
import colors from "../../../styles/Colors";

export default StyleSheet.create({
    searchbar: {
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 0,
        marginBottom: 12,
        borderColor: colors.textInputColor,
        borderWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 0,
        fontSize: 14
    },
    searchme: {
        flex: 1, 
        backgroundColor: colors.primary,
        marginTop: 10,
        marginLeft: 0,
        marginRight: 15,
        marginBottom: 12,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});