import { StyleSheet } from 'react-native';
import { colors, wp, hp, isIPHONEX, isPAD } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    // borderWidth: 1,
    height: isIPHONEX ? hp(6) : hp(7),
    marginVertical: hp(2),
    paddingLeft: wp(3),
    // paddingHorizontal: wp(3),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleText: {
    color: colors.BLACK.default,
    fontSize: isPAD ? 24 : 17,
    // fontWeight: '500',
    width: "58%",
    textAlign: "center"
  },
  insuranceTextHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subHeader: {
    color: 'white',
    fontSize: 14,
  },
  titleContainer: {
    position: 'absolute',
    // alignSelf: 'center',
    left: 0,
    right: 0,
    // borderWidth: 1,
    alignItems: 'center',
    zIndex: 0,
  },
  menuIcon: {
    fontSize: isPAD ? wp(5.5) : 36,
    marginRight: wp(1.5),
  },
  printerIcon: {
    fontSize: isPAD ? wp(4.5) : 30,
    color: colors.WHITE.default,
    marginRight: wp(3),
  },
  editIcon: {
    fontSize: isPAD ? wp(4.5) : 30,
    // color: colors.RED.button,
    marginRight: wp(3),
  },
  floatingDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.WHITE.default,
    position: "absolute",
    right: 5,
    top: 2,
    zIndex: 999
  },
  clearText: {
    // color: colors.PINK.default,
    textDecorationLine: "underline"
  },
  clearButton: {
    // marginTop: 5,
    marginRight: 5,
    alignSelf: "flex-end"
    // position: "absolute",
    // zIndex: 99,
    // transform: [{ rotate: "40deg" }]
  }
});

export default styles;
