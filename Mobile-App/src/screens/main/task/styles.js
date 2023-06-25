import { StyleSheet } from 'react-native';
import { IS_IPHONE_X, colors, hp, wp, } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: IS_IPHONE_X ? hp(3) : hp(1),
    },
    rightBox: {
        position: 'absolute',
        alignSelf: 'flex-end',
        height: 60,
    },
    swipeView: {
        width: 100,
        alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    leftBox: {
        position: 'absolute',
        alignSelf: 'flex-start',
        height: 60,
    },
    deleteIcon: {
        color: colors.RED.default,
        fontSize: 30,
    },
    editIcon: {
        color: colors.RED.default,
        fontSize: 30,
    },
    floatingBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(6),
        paddingHorizontal: wp(5),
        backgroundColor: colors.GRAY.darkText,
        justifyContent: "center",
        position: 'absolute',
        bottom: hp(3.5),
        right: wp(5),
        borderRadius: hp(1.5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    tabContainer: {
        height: hp(7),
        backgroundColor: colors.WHITE.default,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        paddingHorizontal: "3%",
        alignItems: "center",
        marginBottom: hp(2)
    },
    tabButton: {
        width: "45%",
        height: hp(5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    tabtitle: {
        fontSize: hp(2),
        color: colors.GRAY.darkText
    },
    checkInButtonText: {
        color: colors.WHITE.default,
        fontSize: hp(2)
    }
});

export default styles;
