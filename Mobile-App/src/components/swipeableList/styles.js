import { StyleSheet } from 'react-native';
import { IS_IPHONE_X, colors, hp, wp, } from '../../constants';

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
        width: wp(15),
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
});

export default styles;
