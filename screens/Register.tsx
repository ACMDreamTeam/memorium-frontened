import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import * as React from 'react';
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

export default function Register({ navigation, route }: RootStackScreenProps<'Register'>) {
  let user: User = new User();

  const [age, setAge]: any = useState();
  const [gender, setGender]: any = useState();

  user.email = (route.params as any).user.email;
  user.name = (route.params as any).user.name;
  user.password = (route.params as any).user.password;
  user.age = age;
  user.gender = gender;

  return (
    <View style={styles.bgContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You can leave these blank if you don't remember it, we'll ask you when you rememeber.</Text>
        <Text style={styles.title}>{(route.params as any).user.name}</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          placeholderTextColor={'rgba(60, 60, 67, 0.8)'}
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={setAge}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Gender"
          placeholderTextColor={'rgba(60, 60, 67, 0.8)'}
          autoComplete="gender"
          autoCapitalize="none"
          onChangeText={setGender}
        />
      <TouchableOpacity style={styles.button} onPress={() => PostAndSignUp(navigation, user) }>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.agreementText}>
          We never share your data with anyone without your permission, read our
          <Text style={styles.termsText}> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

async function PostAndSignUp(navigation: any, user: any) {
  try {
    await fetch('http://78.46.102.232:5001/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
        gender: user.gender,
        age: parseInt(user.age),
      }),
    }).then(response => {
      response.json().then(data => {
        if (data.error) {
          if (data.message === 'User already exists') {
            navigation.navigate('Login');
          }
          Alert.alert(
            'Error',
            Array.isArray(data.message)
              ? data.error + '\n' + data.message.join(', ')
              : data.error + '\n' + data.message,
          );
          return;
        }
        Alert.alert('Success', 'User created successfully');
        navigation.navigate('Main');
      });
    });
  } catch (error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    height: '100%',
    backgroundColor: '#fff',
  },

  titleContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer:{
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 44,
    marginBottom: 27,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'white',
    textAlign: 'left',
    paddingLeft: 20,
    marginLeft: 27,
    marginRight: 28,
    borderColor: '#0F4674',
  },

  button: {
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

  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },

  title: {
    fontWeight: '700',
    width: '85%',
    fontSize: 22,
    color: '#0F4674',
    textAlign: 'center',
  },
  agreementText: {
    color: 'rgba(60, 60, 67, 0.9)',
    width: '70%',
    textAlign: 'center',
    marginTop: 10,
  },
  termsText: {
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
