import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function AboutMe({ navigation }: RootStackScreenProps<'AboutMe'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About me</Text>

      <Text style={styles.matter}>Name</Text>
      <Text style={styles.matter}>Date of birth</Text>
      <Text style={styles.matter}>Gender</Text>
      <Text style={styles.matter}>Martial Status</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('JournalView')}>
        <Text>Check Journal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },

  title: {
    fontSize: 40,
    color: 'black',
  },

  matter: {
    fontSize: 15,
    marginTop: 20,
    color: 'black',
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
