import React from "react";
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { ICON_CONSTANTS as Icon } from '../../constants';
import styles from "./styles";

export const DrawerListItem = props => {
    const { icon, name, onPress, IconType } = props;
    return (
        <TouchableOpacity onPress={ onPress } style={ styles.listItemContainer }>
            { IconType ? (
                <IconType
                    name={ icon }
                    style={ [styles.listIcon, { fontSize: 30 }] }
                />
            ) : (
                <Icon.AntDesign name={ icon } style={ styles.listIcon } />
            ) }
            <Text
                numberOfLines={ 1 }
                style={ [
                    styles.listItemText,
                    icon === 'logout' && { textDecorationLine: 'underline' },
                ] }>
                { name }
            </Text>
        </TouchableOpacity>
    );
};