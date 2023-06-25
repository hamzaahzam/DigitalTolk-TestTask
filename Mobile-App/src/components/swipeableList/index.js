import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { SwipeListView } from 'react-native-swipe-list-view';
import { hp, wp } from "../../constants";


export const SwipeableList = (props) => {
    const { renderItem, ListHeaderComponent, data, onPressDelete, disableRightSwipe, disableLeftSwipe, onPressEdit } = props;

    const renderHiddenItem = (data, rowMap) => {
        return (
            <>
                <View style={ styles.rightBox }>
                    <TouchableOpacity
                        onPress={ () => onPressDelete(data) }
                        style={ styles.swipeView }>
                        <Text>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.leftBox }>
                    <TouchableOpacity
                        onPress={ () => onPressEdit(data) }
                        style={ styles.swipeView }>
                        <Text>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    };
    return (
        <>
            <SwipeListView
                disableLeftSwipe={ disableLeftSwipe }
                disableRightSwipe={ disableRightSwipe }
                ListHeaderComponent={ ListHeaderComponent }
                showsVerticalScrollIndicator={ false }
                rightOpenValue={ -wp(14) }
                leftOpenValue={ wp(14) }
                closeOnRowOpen={ true }
                closeOnRowPress={ true }
                data={ data }
                keyExtractor={ item => item.id }
                renderItem={ ({ item, index }) => renderItem(item, index) }
                ItemSeparatorComponent={ () => {
                    return (
                        <View style={ { height: hp(2) } } />
                    );
                } }
                ListFooterComponent={ () => {
                    return (
                        <View style={ { height: hp(20) } } />
                    );
                } }
                renderHiddenItem={ (data, rowMap) => renderHiddenItem(data, rowMap) }
            />
        </>
    );
};