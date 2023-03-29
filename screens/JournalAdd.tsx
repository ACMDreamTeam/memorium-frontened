import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Journal } from '../Classes/Journal';

import { RootStackScreenProps } from '../types';
import React from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-native-neat-date-picker';

export default function JournalAdd({ navigation }: RootStackScreenProps<'JournalAdd'>) {
  let journal_obj: Journal = new Journal();
  const [title, setTitle]: any = useState();
  const [journal, setJournal]: any = useState();
  const [date, setDate]: any = useState(new Date());
  const [open, setOpen] = useState(false);

  journal_obj.title = title;
  journal_obj.journal = journal;
  journal_obj.date = date;

  const DateStr = dayjs(date).format('DD MMM YYYY');
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
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text1}>Title</Text>
            <TextInput style={styles.textInput} autoCapitalize="none" placeholder="Title" onChangeText={setTitle} />
            <Text style={styles.text}>What's on your mind?</Text>
            <TextInput
              style={styles.multiLine}
              autoCapitalize="none"
              multiline={true}
              placeholder="Write your journal here"
              onChangeText={setJournal}
            />

            <Text style={styles.text}>Date</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Date"
              value={DateStr}
              onFocus={() => setShowDatePicker(true)}
            />

            <DatePicker isVisible={showDatePicker} mode={'single'} onCancel={onCancel} onConfirm={onConfirm} />
            <TouchableOpacity style={styles.btn} onPress={() => AddJournal(navigation, journal_obj)}>
              <Text style={styles.btnTxt}>Add Journal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function AddJournal(navigation: any, journal: Journal) {
  navigation.navigate('JournalView');
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
    backgroundColor: '#ffff',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 15,
  },

  date_cont: {
    width: 350,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    marginStart: 20,
  },

  multiLine: {
    alignItems: 'center',
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 15,
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

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,

    marginTop: 20,
  },
});
