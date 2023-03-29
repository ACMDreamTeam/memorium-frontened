import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function ReminderView({ navigation }: RootStackScreenProps<'ReminderView'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminder View</Text>

      <TouchableOpacity style={styles.btn} onPress={() => AddReminder(navigation)}>
        <Text style={styles.btnTxt}>Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddReminder(navigation: any) {
  navigation.navigate('ReminderAdd');
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginTop: 20,
    color: '#000',
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
