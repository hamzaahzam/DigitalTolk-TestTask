import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";


export const Button = (props) => {
    const { title, onPress, disabled } = props;
    return (
        <TouchableOpacity disabled={ disabled } onPress={ onPress } style={ [styles.containerStyle, disabled && styles.disableLook] }>
            <Text style={ styles.titleText }>
                { title }
            </Text>
        </TouchableOpacity>
    );
};