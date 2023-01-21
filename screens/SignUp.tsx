import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import * as React from 'react';
import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../types';
import { useState } from 'react';
import { User } from '../Classes/User';

export default function SignUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  let user: User = new User();

  const [name, setName]: any = useState();
  const [email, setEmail]: any = useState();
  const [Password, setPassword]: any = useState();

  user.name = name;
  user.email = email;
  user.password = Password;
  return (
    <View style={styles.bgContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign up and we'll remember everything for you</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
          placeholder="Username"
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => SignUpUser(navigation, user)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.agreementText}>
          By creating an account, you agree to our
          <Text style={styles.termsText}> Terms and Conditions.</Text>
        </Text>
      </View>
    </View>
  );
}

function SignUpUser(navigation: any, user: User) {
  navigation.navigate('Register', {
    user: {
      email: user.email,
      name: user.name,
      password: user.password,
    },
  });
}

const styles = StyleSheet.create({
  bgContainer: {
    height: '100%',
    backgroundColor: '#fff',
  },

  formContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    position: 'relative',
  },
  titleContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    position: 'relative',
  },
  title: {
    fontWeight: '700',
    width: '85%',
    fontSize: 22,
    color: '#0F4674',
    textAlign: 'center',
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
