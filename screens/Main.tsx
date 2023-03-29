import { StyleSheet, Image, Pressable } from 'react-native';

import { Text, View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../types';
import React from 'react';

export default function Main({ navigation }: RootStackScreenProps<'Main'>) {
  return (
    <View style={[styles.container]}>
      <View style={[{ flexDirection: 'row' }]}>
        <Pressable onPress={() => navigation.navigate('AboutMe')}>
          <Image
            source={require('../assets/images/user.png')}
            style={{
              width: 40,
              height: 40,
              marginTop: 80,
              marginStart: 10,
            }}
          ></Image>
        </Pressable>

        <TextInput placeholder="Search" style={styles.textInput} autoCapitalize="none" />
      </View>

      <View style={styles.BackCard}>
        <View style={styles.flexbox2}>
          <TouchableOpacity style={styles.roundButton} onPress={() => openCamera()}>
            <Image
              source={require('../assets/images/camera.png')}
              style={{
                width: 40,
                height: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton} onPress={() => openJournal()}>
            <Image
              source={require('../assets/images/journal.png')}
              style={{
                width: 40,
                height: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton} onPress={() => openReminder()}>
            <Image
              source={require('../assets/images/reminder.png')}
              style={{
                width: 40,
                height: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton} onPress={() => openAboutMe()}>
            <Image
              source={require('../assets/images/memory.png')}
              style={{
                width: 40,
                height: 40,
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flexbox1}>
        <Text>Welcome to Memorium</Text>
      </View>
    </View>
  );

  function openCamera() {
    navigation.navigate('Camera_');
  }

  function openJournal() {
    navigation.navigate('JournalView');
  }

  function openReminder() {
    navigation.navigate('ReminderView');
  }

  function openAboutMe() {
    navigation.navigate('AboutMe');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTxt: {
    color: 'white',
  },

  flexbox1: {
    flex: 1,
    flexDirection: 'row',
  },
  flexbox2: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },

  BackCard: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
  },

  roundButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 80,
    margin: 8,
    color: 'white',
    backgroundColor: 'black',
  },

  textInput: {
    width: 300,
    height: 40,
    margin: 10,
    marginTop: 80,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  btn: {
    width: 200,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: '#077294',
  },

  camera: {
    width: '100%',
    height: '50%',
  },
  faceCount: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
