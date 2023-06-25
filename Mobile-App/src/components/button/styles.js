import { StyleSheet } from 'react-native';
import { colors, hp, rhp, rwp } from '../../constants';

const styles = StyleSheet.create({
    containerStyle: {
        height: hp(6),
        width: "100%",
        backgroundColor: colors.BLACK.default,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp(3)
    },
    titleText: {
        color: colors.WHITE.default,
        fontSize: rhp(16)
    },
    disableLook: {
        backgroundColor: colors.GRAY.inputPlaceHolder,
    }
});

export default styles;
