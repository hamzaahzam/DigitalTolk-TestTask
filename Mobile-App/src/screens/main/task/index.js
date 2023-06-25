import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { CompletedTaskCard, Header, IncompleteTaskCard, SwipeableList } from "../../../components";
import styles from "./styles";
import { ICON_CONSTANTS, colors, taskStrings, wp } from "../../../constants";
import { AddTaskModal } from "../../../components/addTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getAllTasks, taskReducer } from "../../../redux/slices/taskSlice";
import utils from "../../../utils";


export const Task = () => {
    const dispatch = useDispatch();
    const { taskList, loading, error } = useSelector(taskReducer);
    const [addTaskPopup, setAddTaskPopup] = useState(false);
    const [selectedTask, setSelectedTask] = useState({});
    const [selectedTab, setSelectedTab] = useState('incomplete');

    useEffect(() => {
        getTaskMethod();
    }, []);

    useEffect(() => {
        taskList.length > 0 && utils.getFormatedDate(taskList[0].due_at);
    }, [taskList]);


    const renderIncompleteList = (item, index) => {
        return (
            <IncompleteTaskCard data={ item } />
        );
    };
    const renderCompletedList = (item, index) => {
        return (
            <CompletedTaskCard data={ item } />
        );
    };


    const getTaskMethod = () => {

        dispatch(getAllTasks());

    };

    const removeTask = (data) => {
        dispatch(deleteTask(data));
    };
    const editTask = (data) => {
        setSelectedTask(data);
        setAddTaskPopup(true);
    };




    return (
        <View style={ styles.container } >
            <Header
                title={ taskStrings.tasks }
            />
            <View style={ styles.tabContainer }>
                <TouchableOpacity onPress={ () => setSelectedTab("incomplete") }
                    style={ [styles.tabButton, selectedTab == "incomplete" && { backgroundColor: colors.GRAY.darkText }] }>
                    <Text style={ [styles.tabtitle, selectedTab == "incomplete" && { color: colors.WHITE.default }] }>
                        { taskStrings.incomplete }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => setSelectedTab("completed") } s
                    style={ [styles.tabButton, selectedTab == "completed" && { backgroundColor: colors.GRAY.darkText }] }>
                    <Text style={ [styles.tabtitle, selectedTab == "completed" && { color: colors.WHITE.default }] }>
                        { taskStrings.completed }
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <SwipeableList
                    disableRightSwipe={ selectedTab != "incomplete" }
                    onPressEdit={ editTask }
                    onPressDelete={ removeTask }
                    data={ selectedTab == "incomplete" ? taskList.filter(i => i.status !== 'completed') : taskList.filter(i => i.status === 'completed') }
                    renderItem={ selectedTab == "incomplete" ?
                        renderIncompleteList :
                        renderCompletedList }
                />
            </View>
            <TouchableOpacity
                style={ styles.floatingBtn }
                onPress={ () => setAddTaskPopup(true) }>
                <Text style={ styles.checkInButtonText }>{ taskStrings.addTask }</Text>
            </TouchableOpacity>
            <AddTaskModal
                selectedTask={ selectedTask }
                visible={ addTaskPopup }
                onRequestClose={ () => {
                    setSelectedTask({});
                    setAddTaskPopup(false);
                } } />
        </View>
    );
};