import { StyleSheet } from 'react-native';
import { IS_IPHONE_X, colors, hp, wp, } from '../../constants';

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.BLACK.default,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: hp(8),
        // width: "100%",
        width: "95%",
        alignSelf: 'center',
        backgroundColor: colors.WHITE.default,
        paddingHorizontal: wp(3),
        borderRadius: hp(1),
        justifyContent: "center",
        marginHorizontal: wp(2)
    },
    checkBoxContainer: { flexDirection: "row", marginVertical: hp(1) },
    checkBox: {
        height: hp(2.5),
        backgroundColor: colors.GRAY.background,
        width: hp(2.5),
        borderRadius: 2,
        borderWidth: 1.5,
        borderColor: colors.GRAY.text,
        justifyContent: "center",
        alignItems: "center"
    },
    clockImage: { height: hp(2), width: hp(2), resizeMode: "contain" },
    pinImage: { height: hp(2.5), width: hp(2.5), resizeMode: "contain" },
    coordinates: { color: "#B9B9BE" },
    timeContainer: { flexDirection: "row", alignItems: "center", marginTop: hp(1) },
    locationText: {
        color: colors.GRAY.darkText,
        fontSize: hp(1.9)
    }

});

export default styles;
