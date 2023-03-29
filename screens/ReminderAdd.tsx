import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Reminder } from '../Classes/Reminder';

import { RootStackScreenProps } from '../types';
import DatePicker from 'react-native-neat-date-picker';
import dayjs from 'dayjs';
import RadioButtonRN from 'radio-buttons-react-native';

export default function ReminderAdd({ navigation }: RootStackScreenProps<'ReminderAdd'>) {
  let reminder_obj: Reminder = new Reminder();
  const [title, setTitle]: any = useState();
  const [notes, setNotes]: any = useState();
  const [date, setDate]: any = useState(new Date());
  const [time, setTime]: any = useState(new Date());
  const [priority, setPriority]: any = useState();
  const [open, setOpen] = useState(false);

  const radio_data = [
    {
      label: 'High',
    },
    {
      label: 'Medium',
    },
    {
      label: 'Low',
    },
  ];

  reminder_obj.title = title;
  reminder_obj.notes = notes;
  reminder_obj.date = date;

  const DateStr = dayjs(date).format('DD MMM');
  const TimeStr = dayjs(time).format('HH:MM');

  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = output => {
    // You should close the modal in here
    setShowDatePicker(false);

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output);
    setDate(output.dateString);
    setTime(output.timeString);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text1}>Title</Text>
            <TextInput style={styles.textInput} autoCapitalize="none" placeholder="Title" onChangeText={setTitle} />
            <Text style={styles.text}>Notes</Text>
            <TextInput
              style={styles.multiLine}
              autoCapitalize="none"
              multiline={true}
              placeholder="Write any notes"
              onChangeText={setNotes}
            />

            <Text style={styles.text}>Date and time</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Date and time"
              value={DateStr + ' ' + TimeStr}
              onFocus={() => setShowDatePicker(true)}
            />
            <DatePicker isVisible={showDatePicker} mode={'single'} onCancel={onCancel} onConfirm={onConfirm} />
            <Text style={styles.text}>Set Priority</Text>
            <Text style={styles.text}>"Need to implement Radio Button"</Text>

            <TouchableOpacity style={styles.btn} onPress={() => AddReminder(navigation, reminder_obj)}>
              <Text style={styles.btnTxt}>Add Reminder</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function AddReminder(navigation: any, reminder: Reminder) {
  navigation.navigate('ReminderView');
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textInput: {
    width: 350,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#ffff',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  text1: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
  },
  multiLine: {
    width: 350,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 15,

    alignItems: 'center',
  },
  btn: {
    borderWidth: 2,
    backgroundColor: '#0F4674',
    marginTop: 25,
    borderRadius: 100,
    width: '65%',
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0F4674',
  },
  btnTxt: {
    color: '#fff',
  },
});
