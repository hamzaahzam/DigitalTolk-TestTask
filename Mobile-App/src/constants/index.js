import ADIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from './colors';
import {
  IS_IPHONE,
  IS_IPHONE_X,
  height,
  hp,
  rfs,
  rhp,
  rwp,
  width,
  wp,
} from './dimensions';

const ICON_CONSTANTS = {
  IonIcons: IIcon,
  AntDesign: ADIcon,
  MCIcon: MCIcon,
  EvilIcon: EvilIcon,
  FAIcon: FAIcon,
  SLIcon: SLIcon,
  Entypo: Entypo,
  Fontisto: Fontisto,
  MIcon: MIcon,
  FontAwesome: FontAwesome,
  Feather: Feather,
  Foundation: Foundation,
  Octicons: Octicons,
  FontAwesome5: FontAwesome5
};
export * from './fonts';
export * from './strings';
export { colors, IS_IPHONE, IS_IPHONE_X, height, hp, rfs, rhp, rwp, width, wp, ICON_CONSTANTS };
