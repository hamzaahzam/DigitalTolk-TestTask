import { StyleSheet } from 'react-native';
import { colors, hp, rwp } from '../../constants';

const styles = StyleSheet.create({
    container: {
        height: hp(6),
        width: "100%",
        backgroundColor: colors.GRAY.background,
        borderWidth: 1,
        borderColor: colors.GRAY.inputPlaceHolder,
        borderRadius: hp(1),
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: rwp(16),
        color: colors.BLACK.default,
        textAlignVertical: "top",
    },
    eyeContainer: {
        width: "15%",
        height: hp(6),
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        color: colors.RED.default,
        marginTop: hp(0.7),
    }
});

export default styles;
