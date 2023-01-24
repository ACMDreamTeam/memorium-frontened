import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Reminder } from '../Classes/Reminder';

import { RootStackScreenProps } from '../types';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import RadioButtonRN from 'radio-buttons-react-native';

export default function ReminderAdd({ navigation }: RootStackScreenProps<'ReminderAdd'>) {
  let reminder_obj: Reminder = new Reminder();
  const [title, setTitle]: any = useState();
  const [notes, setNotes]: any = useState();
  const [date, setDate]: any = useState(new Date());
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
  const TimeStr = dayjs(date).format('hh:mm');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
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
            onFocus={() => setOpen(true)}
          />

          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              console.log(DateStr);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Text style={styles.text}>Set Priority</Text>
          <RadioButtonRN data={radio_data} selectedBtn={(e: any) => setPriority(e)} />

          <TouchableOpacity style={styles.btn} onPress={() => AddReminder(navigation, reminder_obj)}>
            <Text>Add Reminder</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
  },
  textInput: {
    width: 350,
    height: 40,
    margin: 20,
    backgroundColor: '#ffff',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text1: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
  },
  multiLine: {
    alignItems: 'center',
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    paddingTop: 15,
  },
  btn: {
    width: 200,
    height: 40,
    marginTop: 25,
    borderWidth: 2,

    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#077294',
  },
});
