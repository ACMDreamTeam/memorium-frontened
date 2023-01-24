import { StyleSheet, Image, Alert } from 'react-native';

import { Text, View } from '../components/Themed';
import * as React from 'react';
import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  const [email, setEmail]: any = React.useState();
  const [password, setPassword]: any = React.useState();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text style={styles.signUpText}>Skip Login (For Testing Purposes)</Text>
      </TouchableOpacity>
      <Image source={require('../assets/images/memoriumwhite.png')} style={styles.logo}></Image>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
        style={styles.textInput}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => LoginInit(navigation, { email, password })}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        Don't have an account?
        <Text style={styles.signUp} onPress={() => SignUpInit(navigation)}>
          {' '}
          Sign up here
        </Text>
      </Text>
    </View>
  );
}

async function LoginInit(navigation: any, user: { email: string; password: string }) {
  try {
    await fetch('http://78.46.102.232:5001/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    }).then(response => {
      response.json().then(data => {
        if (data.error) {
          Alert.alert(
            'Error',
            Array.isArray(data.message)
              ? data.error + '\n' + data.message.join(', ')
              : data.error + '\n' + data.message,
          );
          return;
        }
        Alert.alert('Success', 'Logged in successfully');
        navigation.navigate('Main');
      });
    });
  } catch (error) {
    console.error(error);
  }
}

function SignUpInit(navigation: any) {
  navigation.navigate('SignUp');
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F4674',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
  },

  background: {
    backgroundColor: '#0F4674',
  },

  logo: {
    width: 285,
    height: 57,
    marginBottom: 38,
  },

  button: {
    borderWidth: 2,
    backgroundColor: '#fff',
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
    color: 'black',
  },

  signUpText: {
    color: '#fff',
    marginTop: 15,
  },

  signUp: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },

  textInput: {
    width: '80%',
    height: 44,
    marginBottom: 27,
    borderRadius: 100,
    backgroundColor: 'white',
    textAlign: 'left',
    paddingLeft: 20,
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
});
