import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { ICON_CONSTANTS as Icon, drwerStrings } from '../../constants';
import styles from './styles';
import { DrawerListItem } from '../drawerListItem';
import { navigateReset } from '../../navigation/navigationRef';

export const DrawerComponent = props => {

  const handleNavigation = screen => {
    props.navigation.navigate(screen);
  };

  const RenderDrawer = () => {
    return (
      <View style={ styles.drawerContentContainer }>
        <DrawerListItem
          IconType={ Icon.FontAwesome5 }
          icon={ 'clipboard-list' }
          name={ drwerStrings.task }
          onPress={ () => handleNavigation('Task') }
        />
        <DrawerListItem
          IconType={ Icon.Entypo }
          icon={ 'location-pin' }
          name={ drwerStrings.location }
          onPress={ () => handleNavigation('Location') }
        />
        <View style={ styles.logoutContainer }>
          <DrawerListItem
            IconType={ Icon.MIcon }
            icon={ 'logout' }
            name={ drwerStrings.logout }
            onPress={ () => navigateReset('AuthStack') }
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={ { flex: 1 } }>
      <View style={ styles.drawerContainer }>
        <RenderDrawer />
      </View>
    </SafeAreaView>
  );
};


