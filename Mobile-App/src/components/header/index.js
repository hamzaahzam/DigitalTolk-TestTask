import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import styles from './styles';
import { colors, ICON_CONSTANTS } from '../../constants';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export const Header = props => {
  const {
    title,
    refresh,
    onAddPress,
    onRefreshPress,
    subHeader,
    isBack,
    onPressRightIcon,
    onOpenDrawer,
  } = props;

  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus();

  const openDrawer = () => {
    try {
      navigation.dispatch(DrawerActions.openDrawer());
      onOpenDrawer && onOpenDrawer();
      Keyboard.dismiss();
    } catch(e) {
      console.log('drawer open error: ', e);
    }
  };
  const refreshHandler = () => {
    if(onRefreshPress) {
      onRefreshPress();
    }
  };
  const addPressHandler = () => {
    if(onAddPress) {
      onAddPress();
    } else {
      navigation.navigate('StartTest');
    }
  };

  return (
    <View style={ styles.container }>
      { title && (
        <View style={ styles.titleContainer }>
          <Text
            numberOfLines={ 1 }
            style={ [
              styles.titleText,
              isBack && styles.insuranceTextHeader,
            ] }
          >
            { title }
          </Text>
          { subHeader && <Text style={ styles.subHeader }>{ subHeader }</Text> }
        </View>
      ) }
      <TouchableOpacity
        onPress={ isBack ? onPressRightIcon : openDrawer }
        style={ { zIndex: 2 } }
      >
        <ICON_CONSTANTS.IonIcons
          style={ styles.menuIcon }
          color={ colors.BLACK.default }
          name={ isBack ? 'arrow-back-outline' : 'menu' }
        />
      </TouchableOpacity>
      <View>
        <View style={ { flexDirection: 'row', alignItems: 'center' } }>
          { refresh && (
            <TouchableOpacity onPress={ refreshHandler }>
              <ICON_CONSTANTS.EvilIcon
                color={ colors.BLACK.default }
                style={ styles.menuIcon }
                name={ 'refresh' }
              />
            </TouchableOpacity>
          ) }
        </View>
      </View>
    </View>
  );
};


