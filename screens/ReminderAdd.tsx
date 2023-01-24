import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Reminder } from '../Classes/Reminder';

import { RootStackScreenProps } from '../types';

export default function ReminderAdd({ navigation }: RootStackScreenProps<'ReminderAdd'>) {
  const [name, setName]: any = useState();
  const [date, setDate]: any = useState();
  const [time, setTime]: any = useState();
  const [priority, setPriority]: any = useState();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text1}>Title</Text>
            <TextInput style={styles.textInput} autoCapitalize="none" placeholder="Title" onChangeText={setName} />
            <Text style={styles.text}>Notes</Text>
            <TextInput
              style={styles.multiLine}
              autoCapitalize="none"
              multiline={true}
              placeholder="Write any notes"
              onChangeText={setJournal}
            />

            <Text style={styles.text}>Date and time</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => AddReminder(navigation, journal_obj)}>
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
  container: {},
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
    height: 80,
    margin: 50,
    borderWidth: 2,
    color: '#ffff',
  },
});
