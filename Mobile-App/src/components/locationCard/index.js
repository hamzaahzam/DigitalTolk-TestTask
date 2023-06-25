import React from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { ICON_CONSTANTS, colors, hp, wp } from "../../constants";
import { icons } from "../../assets/icons";
import styles from "./styles";
export const LocationCard = (props) => {
    const { checked, data } = props;
    return (
        <View style={ styles.container } >
            <View style={ styles.checkBoxContainer }>
                <Image source={ icons.pin } style={ styles.pinImage } />
                <View style={ { marginLeft: wp(3) } }>
                    <Text style={ styles.locationText }>{ data?.address }</Text>
                    <View style={ styles.timeContainer }>
                        <Text style={ styles.coordinates }>{ `${data?.latitude}, ${data?.longitude}` }</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};