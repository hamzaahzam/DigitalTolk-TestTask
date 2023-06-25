import React from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { ICON_CONSTANTS, colors, hp, wp } from "../../constants";
import { icons } from "../../assets/icons";
import styles from "./styles";
export const CompletedTaskCard = (props) => {
    const { data } = props;
    return (
        <View style={ styles.container } >
            <View style={ styles.checkBoxContainer }>
                <TouchableOpacity style={ styles.checkBox }>
                    <ICON_CONSTANTS.IonIcons
                        name={ "checkmark-sharp" }
                        size={ hp(1.5) }
                        color={ colors.GRAY.darkText } />
                </TouchableOpacity>
                <View style={ { marginLeft: wp(3) } }>
                    <Text style={ { color: colors.GRAY.darkText } }>{ data.title }</Text>
                </View>
            </View>
        </View>
    );
};