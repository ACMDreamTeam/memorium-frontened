import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import { RootStackScreenProps } from '../types';

export default function JournalView({ navigation }: RootStackScreenProps<'JournalView'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal View</Text>

      <TouchableOpacity style={styles.btn} onPress={() => AddJournal(navigation)}>
        <Text style={styles.btnTxt}>Add Journal</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddJournal(navigation: any) {
  navigation.navigate('JournalAdd');
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
