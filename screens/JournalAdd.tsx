import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Journal } from '../Classes/Journal';

import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

import { RootStackScreenProps } from '../types';

export default function JournalAdd({ navigation }: RootStackScreenProps<'JournalAdd'>) {
  let journal_obj: Journal = new Journal();
  const [title, setTitle]: any = useState();
  const [journal, setJournal]: any = useState();
  const [date, setDate]: any = useState();
  const [open, setOpen] = useState(false);

  let todaysDate: String = getToday();

  journal_obj.title = title;
  journal_obj.journal = journal;
  journal_obj.date = date;

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
              onFocus={() => setOpen(true)}
            />
          </View>

          <View style={styles.date_cont}>
            <DatePicker
              modal
              options={{
                backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              current={todaysDate}
              selected={todaysDate}
              mode="calendar"
              minuteInterval={10}
              style={{ borderRadius: 10 }}
            />
          </View>

          <TouchableOpacity style={styles.signupbtn} onPress={() => AddJournal(navigation, journal_obj)}>
            <Text>Add Journal</Text>
          </TouchableOpacity>
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

  date_cont: {
    width: 350,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginStart: 20,
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

  signupbtn: {
    width: 200,
    height: 40,
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderColor: '#077294',
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

  btn: {
    width: 200,
    height: 80,
    margin: 50,
    borderWidth: 2,
    color: '#ffff',
  },
});
