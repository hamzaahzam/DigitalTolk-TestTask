import React, { useEffect, useContext } from "react";
import { View, TouchableOpacity, Text, Platform, PermissionsAndroid, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Header, LocationCard, SwipeableList } from "../../../components";
import styles from "./styles";
import { hp, locationStrings, wp } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { checkinReducer, getAllCheckins, createCheckIn, removeCheckin } from "../../../redux/slices/checkinSlice";
import { LoaderContext } from "../../../hooks/loaderProvider";
import { useIsFocused } from "@react-navigation/native";


export const Location = () => {
    const { setLoader } = useContext(LoaderContext);
    const focused = useIsFocused();
    const { checkinList, loading, error, currentLocation } = useSelector(checkinReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if(focused) {
            getCheckinList();
        }
    }, [focused]);
    const getCheckinList = () => {
        dispatch(getAllCheckins());
    };
    const renderList = (item) => {
        return (
            <LocationCard data={ item } />
        );
    };
    const renderListHeader = () => {
        return (
            <View style={ styles.listHeaderStyle }>
                <Text style={ [styles.tabtitle, { marginBottom: hp(2) }] }>
                    { locationStrings.currentLocation }
                </Text>
                { currentLocation && <LocationCard data={ currentLocation } /> }
                <Text style={ [styles.tabtitle, { marginTop: hp(4) }] }>
                    { locationStrings.previousLocation }
                </Text>
            </View>
        );
    };
    const fetchCoordinates = () => {
        Geolocation.getCurrentPosition(
            position => {
                let body = {
                    address: `Address ${position.coords.latitude},${position?.coords?.longitude}`,
                    latitude: position?.coords?.latitude,
                    longitude: position?.coords?.longitude,
                };
                createNewCheckIn(body);
                setLoader(false);
            },
            error => {
                setLoader(false);
                console.log("error", error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };
    const createNewCheckIn = (body) => {
        dispatch(createCheckIn({
            ...body, fetchList: () => {
                getCheckinList();
            }
        }));
    };
    const handleAndroidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Address Picker Location Permission',
                    message: 'Address Picker needs access to your location ',
                },
            );
            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                fetchCoordinates();
            } else {
                Alert.alert('Location Permission Not Granted');
            }
        } catch(err) {
            setLoader(false);
            console.warn(err);
        }
    };
    const checkPermission = async () => {
        setLoader(true);
        if(Platform.OS === 'ios') {
            await Geolocation.requestAuthorization('whenInUse').then(() => {
                fetchCoordinates();
            });
        } else {
            handleAndroidPermission();
        }
    };
    const deleteCheckin = (data) => {
        dispatch(removeCheckin({
            ...data, fetchList: () => {
                getCheckinList();
            }
        }));
    };
    return (
        <View style={ styles.container } >
            <Header
                title={ locationStrings.location }
            />
            <View style={ { paddingHorizontal: wp(2) } }>
                <SwipeableList
                    disableRightSwipe={ true }
                    onPressDelete={ deleteCheckin }
                    data={ checkinList }
                    ListHeaderComponent={ renderListHeader }
                    renderItem={ renderList } />
            </View>
            <TouchableOpacity
                style={ styles.floatingBtn }
                onPress={ () => checkPermission() }
            >
                <Text style={ styles.checkInButtonText }>{ locationStrings.checkIn }</Text>
            </TouchableOpacity>
        </View>
    );
};