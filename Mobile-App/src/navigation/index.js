import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from "./authStack";
import { navigationRef } from "./navigationRef";
import { DrawerStack } from "./drawerStack";

const Stack = createStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
    animationEnabled: false,
});

export const Navigation = () => {
    return (
        <NavigationContainer ref={ navigationRef }>
            <Stack.Navigator initialRouteName="AuthStack">
                <Stack.Screen
                    name="AuthStack"
                    component={ AuthStack }
                    options={ navOptionHandler }
                />
                <Stack.Screen
                    name="DrawerStack"
                    component={ DrawerStack }
                    options={ navOptionHandler }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};