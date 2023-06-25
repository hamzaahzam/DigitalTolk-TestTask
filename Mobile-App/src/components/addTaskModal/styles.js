import { StyleSheet } from 'react-native';
import { colors, wp, hp, Fonts, isPAD, rwp } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.BLACK.backgroundOpacity,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        // height: hp('30%'),
        width: wp('95%'),
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateButton: {
        height: hp(6),
        width: "100%",
        backgroundColor: colors.GRAY.background,
        borderWidth: 1,
        borderColor: colors.GRAY.inputPlaceHolder,
        borderRadius: hp(1),
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp(2),
        paddingHorizontal: rwp(16),
    },
    dateText: {
        color: colors.GRAY.inputPlaceHolder,
    }
});

export default styles;
