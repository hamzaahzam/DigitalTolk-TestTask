import { StyleSheet } from 'react-native';
import { colors, hp, wp, isPAD, isIPHONE } from '../../constants';

const styles = StyleSheet.create({
  listIcon: {
    color: colors.BLACK.opacity_50,
    fontSize: isPAD ? wp(3.5) : 30,
  },
  listItemText: {
    fontWeight: 'normal',
    paddingLeft: isPAD ? wp(2.5) : wp(5),
    fontSize: isPAD ? wp(2) : 16,
    flex: 1,
  },
  listItemContainer: {
    padding: wp(3),
    borderBottomWidth: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.GRAY.lightText,
    marginVertical: 5,
  },
});

export default styles;
