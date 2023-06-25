import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { ICON_CONSTANTS, colors, hp } from "../../constants";


export const Input = (props) => {
    const { editable, inputStyle, multiline, value, placeholder, onChangeText, keyboardType, secureTextEntry, containerStyle, onPressEye, showPassword, errorMsg } = props;
    return (
        <View >
            <View style={ [styles.container, containerStyle] }>
                <TextInput
                    value={ value }
                    placeholder={ placeholder }
                    onChangeText={ onChangeText }
                    style={ [styles.inputContainer, inputStyle] }
                    keyboardType={ keyboardType }
                    secureTextEntry={ secureTextEntry }
                    placeholderTextColor={ colors.GRAY.inputPlaceHolder }
                    multiline={ multiline }
                    editable={ editable }
                />
                { onPressEye && <TouchableOpacity style={ styles.eyeContainer } onPress={ onPressEye }>
                    <ICON_CONSTANTS.Feather name={ !showPassword ? "eye" : "eye-off" } size={ hp(2) } />
                </TouchableOpacity> }
            </View>
            { errorMsg && <Text style={ styles.errorText }>{ errorMsg }</Text> }
        </View>
    );
};