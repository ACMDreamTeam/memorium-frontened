import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import { RootStackScreenProps } from '../types';

export default function JournalView({ navigation }: RootStackScreenProps<'JournalView'>) {
  return (
    <View style={styles.container}>
      <Text>Journal View</Text>

      <TouchableOpacity style={styles.btn} onPress={() => AddJournal(navigation)}>
        <Text>Add Journal</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddJournal(navigation: any) {
  navigation.navigate('JournalAdd');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    width: 200,
    height: 40,
    marginTop: 25,
    justifyContent: 'center',
    borderWidth: 2,

    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderColor: '#077294',
  },
});
