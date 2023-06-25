import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerComponent } from '../../components';
import { Location, Task } from '../../screens';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName={ 'Task' }
            useLegacyImplementation={ false }
            screenOptions={ {
                swipeEnabled: false,
                headerShown: false,
                drawerType: 'front',
                drawerStyle: {
                    width: '72.5%',
                },
            } }
            drawerContent={ props => <DrawerComponent { ...props } /> }
        >
            <Drawer.Screen name="Task" component={ Task } />
            <Drawer.Screen name="Location" component={ Location } />
        </Drawer.Navigator>
    );
};