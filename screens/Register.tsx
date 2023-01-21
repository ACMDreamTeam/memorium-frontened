import { Alert, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button } from 'react-native';
import { RootStackScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import { User } from '../Classes/User';
import { useState } from 'react';
const makeReqOptions = (method: string, body: any) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
});

export default function Resgister({ navigation, route }: RootStackScreenProps<'Register'>) {
  let user: User = new User();

  const [age, setAge]: any = useState();
  const [gender, setGender]: any = useState();

  user.email = (route.params as any).user.email;
  user.name = (route.params as any).user.name;
  user.passwrod = (route.params as any).user.password;
  user.age = age;
  user.gender = gender;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete your profile for</Text>
      <Text style={styles.title}>{(route.params as any).user.name}</Text>

      <View style={styles.container}>
        <Text style={styles.text}>Age</Text>
        <TextInput style={styles.textInput} autoCapitalize="none" keyboardType="numeric" onChangeText={setAge} />

        <Text style={styles.text}>Gender</Text>
        <TextInput style={styles.textInput} autoComplete="gender" autoCapitalize="none" onChangeText={setGender} />
      </View>

      <Button title="Save" onPress={() => PostAndSignUp(navigation, user)}></Button>
    </View>
  );
}

async function PostAndSignUp(navigation: any, user: any) {
  console.log(user.age, typeof user.age);
  console.log(user.gender, typeof user.gender);

  try {
    await fetch('http://78.46.102.232:5001/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        password: user.passwrod,
        name: user.name,
        gender: user.gender,
        age: parseInt(user.age),
      }),
    }).then(response => {
      response.json().then(data => {
        console.log(data, Array.isArray(data.message));
        if (data.error) {
          Alert.alert(
            'Error',
            data.error + '\n' + Array.isArray(data.message) ? data.message.join(', ') : data.message,
          );
          return;
        }
        Alert.alert('Post created at : ', data.createdAt);
        navigation.navigate('Main');
      });
    });
  } catch (error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF0F1',
  },
  textInput: {
    width: 200,
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    marginStart: 20,
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  btn: {
    margin: 50,
    borderWidth: 2,
    color: '#ffff',
  },
});
