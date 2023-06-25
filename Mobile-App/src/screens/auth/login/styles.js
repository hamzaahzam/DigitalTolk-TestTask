import { StyleSheet } from 'react-native';
import { colors, hp, rhp } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE.default,
        paddingHorizontal: "5%",
        flexDirection: "column",
        justifyContent: "space-evenly"

    },
    passwordContainer: {
        marginTop: hp(2),
        // marginBottom: hp
    },
    titleText: {
        fontSize: rhp(30),
        alignSelf: "center",
        marginBottom: hp(5),
        color: colors.BLACK.default,
        fontWeight: "500"
    },
    forgetPassword: {
        marginTop: hp(2),
        alignSelf: "center",
        fontSize: hp(2.1),
        // fontWeight: "600",

    }
});

export default styles;
