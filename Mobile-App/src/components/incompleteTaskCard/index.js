import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { ICON_CONSTANTS, colors, hp, wp } from "../../constants";
import { icons } from "../../assets/icons";
import styles from "./styles";
import moment from "moment";
import utils from "../../utils";
import { useDispatch } from "react-redux";
import { LoaderContext } from "../../hooks/loaderProvider";
import { getAllTasks, updateTaskRequest } from "../../redux/slices/taskSlice";
export const IncompleteTaskCard = (props) => {
    const { data } = props;
    const { setLoader } = useContext(LoaderContext);
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const updateTask = () => {
        setChecked(!checked);
        setLoader(true);
        dispatch(updateTaskRequest({
            id: data?.id,
            payload: { status: "completed" },
            fetchList: () => {
                dispatch(getAllTasks());
                setLoader(false);
            }
        }));
    };
    return (
        <View style={ styles.container } >
            <View style={ styles.checkBoxContainer }>
                <TouchableOpacity onPress={ updateTask } style={ styles.checkBox }>
                    { checked && <ICON_CONSTANTS.IonIcons
                        name={ "checkmark-sharp" }
                        size={ hp(1.5) }
                        color={ colors.GRAY.darkText } /> }
                </TouchableOpacity>
                <View style={ { marginLeft: wp(3) } }>
                    <Text style={ { color: colors.GRAY.darkText } }>{ data.title }</Text>
                    <View style={ styles.timeContainer }>
                        <Image source={ icons.alarmClock } style={ styles.clockImage } />
                        <Text style={ styles.time }>{ utils.getFormatedDate(data.due_at) }</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};