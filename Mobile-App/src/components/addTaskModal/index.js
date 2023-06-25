import React, { useState, useContext, useEffect } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import { ICON_CONSTANTS, addTaskStrings, colors, hp } from '../../constants';
import styles from './styles';
import { Input } from '../input';
import { Button } from '../button';
import _ from 'lodash';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { LoaderContext } from '../../hooks/loaderProvider';
import { useDispatch } from 'react-redux';
import NotificationService from '../../services/NotificationService';
import { createNewTask, getAllTasks, updateTaskRequest } from '../../redux/slices/taskSlice';

export const AddTaskModal = props => {
  const dispatch = useDispatch();
  const { visible, onRequestClose, selectedTask } = props;
  const { setLoader } = useContext(LoaderContext);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('Due Date');
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  useEffect(() => {
    if(selectedTask.item) {
      setSummary(selectedTask.item?.title);
      setDescription(selectedTask.item?.description);
      setDueDate(selectedTask.item?.due_at);
    }
  }, [selectedTask]);


  const onDobConfirm = (date, fromModal = false) => {
    setDueDate(moment(date).format('YYYY-MM-DD,HH:mm:ss'));
    setDatePickerOpen(false);
  };

  const checkValidation = () => {
    if(summary.length < 1) {
      Alert.alert("", "Please enter summary");
      return;
    }
    if(description.length < 1) {
      Alert.alert("", "Please enter description");
      return;
    }
    if(dueDate == 'Due Date') {
      Alert.alert("", "Please enter due date");
      return;
    }
    setLoader(true);
    dispatch(createNewTask({
      title: summary,
      description,
      status: "incomplete",
      due_at: dueDate,
      fetchList: () => {
        closeModal();
        dispatch(getAllTasks());
        Alert.alert("", "Task created successfully");
        generateNotification();
        setLoader(false);
      }
    }));
  };

  const generateNotification = () => {
    try {
      const futureTime = moment(dueDate, 'YYYY-MM-DD,HH:mm:ss');
      const timestamp = futureTime.valueOf();;
      NotificationService.scheduleNotification({
        title: summary,
        body: description,
        timestamp,
        data: {
          name: 'This is todo test',
          _id: 123,
          data: Date.now(),
        },
      });
    } catch(error) {
      console.log("🚀 ~ file: index.js:77 ~ generateNotification ~ error:", error);
    }
  };
  const updateTask = () => {
    setLoader(true);
    closeModal();
    dispatch(updateTaskRequest({
      id: selectedTask?.item?.id,
      payload: {
        title: summary,
        description,
        status: selectedTask?.item?.status,
        due_at: dueDate,
      },
      fetchList: () => {
        dispatch(getAllTasks());
        setLoader(false);
      }
    }));
  };

  const closeModal = () => {
    onRequestClose();
    setDescription("");
    setSummary("");
    setDueDate('Due Date');
  };

  return (
    <Modal
      animationType="slide"
      transparent={ true }
      visible={ visible }
      onRequestClose={ closeModal }>
      <View style={ styles.container }>
        <View style={ styles.modalView }>
          <View style={ styles.closeButton }>
            <Text style={ styles.textBold }>{ addTaskStrings.newTask }</Text>
            <TouchableOpacity onPress={ closeModal }>
              <ICON_CONSTANTS.AntDesign
                name="close"
                color={ colors.GRAY.darkText }
                size={ 20 }
              />
            </TouchableOpacity>
          </View>
          <Input
            placeholder={ addTaskStrings.summary }
            containerStyle={ { marginTop: 20 } }
            onChangeText={ setSummary }
            value={ summary }
          />
          <Input
            placeholder={ addTaskStrings.description }
            containerStyle={ { marginTop: 20, height: hp(15) } }
            multiline={ true }
            inputStyle={ { height: hp(15) } }
            onChangeText={ setDescription }
            value={ description }
          />
          <TouchableOpacity
            style={ styles.dateButton }
            onPress={ () => setDatePickerOpen(true) }>
            <Text style={ styles.dateText }>{ dueDate }</Text>
          </TouchableOpacity>
          <Button onPress={ () => _.isEmpty(selectedTask) ? checkValidation() : updateTask() } title={ 'Save' } />
        </View>
      </View>
      <DateTimePickerModal
        isVisible={ isDatePickerOpen }
        date={ new Date() }
        mode={ "datetime" }
        onConfirm={ onDobConfirm }
        onCancel={ () => setDatePickerOpen(false) }
      />
    </Modal>
  );
};
