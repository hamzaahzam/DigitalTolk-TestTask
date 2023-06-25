import { StyleSheet } from 'react-native';
import { colors, hp, wp, isPAD, IS_IPHONE } from '../../constants';

const styles = StyleSheet.create({
  profileIcon: {
    color: colors.BLACK.opacity_50,
    padding: 2,
    fontSize: isPAD ? wp(4) : 32,
  },
  profileImage: {
    width: 30,
    height: 30,
    padding: 2,
    borderRadius: 10,
  },
  iconWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  listIcon: {
    color: colors.BLACK.opacity_50,
    fontSize: isPAD ? wp(3.5) : 30,
  },
  profileContainer: {
    marginTop: IS_IPHONE ? hp(2) : hp(4),
    marginBottom: hp(2),
    paddingLeft: isPAD ? wp(4.25) : wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    marginLeft: isPAD ? wp(2.5) : wp(4),
    marginRight: wp(3),
    flex: 1,
    fontSize: isPAD ? wp(2) : 14,
  },
  switchText: {
    textAlign: 'center',
    fontSize: isPAD ? wp(2) : 16,
  },
  switch: {
    alignSelf: 'center',
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  listItemContainer: {
    padding: wp(3),
    borderBottomWidth: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.GRAY.lightText,
    marginVertical: 5,
  },
  listItemText: {
    fontWeight: 'normal',
    paddingLeft: isPAD ? wp(2.5) : wp(5),
    fontSize: isPAD ? wp(2) : 16,
    flex: 1,
  },
  versionText: {
    textAlign: 'center',
    marginVertical: hp(2),
  },
  appLogo: {
    height: isPAD ? hp(7.5) : hp(10),
    width: isPAD ? hp(10) : wp(30),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headerContainer: {
    // marginStart: isPAD ? wp(2) : hp(4),
    paddingTop: IS_IPHONE ? hp(0) : hp(5)
    // flex: 1
  },
  drawerContainer: {
    marginStart: wp(4),
    flex: 1
  },
  drawerContentContainer: {
    flex: 1,
    paddingTop: IS_IPHONE ? hp(0) : hp(5)
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: "5%",
  }
});

export default styles;
