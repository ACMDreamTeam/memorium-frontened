import { Alert, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button } from 'react-native';
import { RootStackScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import { User } from '../Classes/User';
import { useState } from 'react';

export default function Resgister({ navigation, route }: RootStackScreenProps<'Register'>) {
  let user: User = new User();

  const [age, setAge]: any = useState();
  const [gender, setGender]: any = useState();

  user.email = route.params?.user.email;
  user.name = route.params?.user.name;
  user.passwrod = route.params?.user.password;
  user.age = age;
  user.gender = gender;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postName: 'signup' }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete your profile for</Text>
      <Text style={styles.title}>{route.params.user.name}</Text>

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
  console.log(user.age);
  console.log(user.gender);

  try {
    await fetch('https://reqres.in/api/posts', requestOptions).then(response => {
      response.json().then(data => {
        Alert.alert('Post created at : ', data.createdAt);
      });
    });
  } catch (error) {
    console.error(error);
  }

  navigation.navigate('Main');
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
