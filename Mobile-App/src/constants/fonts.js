import { Platform } from 'react-native';
import { isPAD } from './index';

export default {
  SF_PRO_TEXT: {
    ...Platform.select({
      ios: {
        Poppins: {
          Light: 'Poppins-Light',
          Bold: 'Poppins-Bold',
          Medium: 'Poppins-Medium',
          Regular: 'Poppins-Regular',
        },
      },
      android: {
        Poppins: {
          Light: 'Poppins-Light',
          Bold: 'Poppins-Bold',
          Medium: 'Poppins-Medium',
          Regular: 'Poppins-Regular',
        },
      },
    }),
  },
};
