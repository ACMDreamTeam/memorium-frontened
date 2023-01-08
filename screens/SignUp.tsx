import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../types';

export default function SignUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.container}>
        <Text style={styles.text1}>Username</Text>
        <TextInput style={styles.textInput} autoCapitalize="none" autoComplete="name" />
        <Text style={styles.text}>EmailID</Text>
        <TextInput style={styles.textInput} autoComplete="gender" autoCapitalize="none" />
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.textInput} autoComplete="gender" autoCapitalize="none" />
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput style={styles.textInput} autoComplete="gender" autoCapitalize="none" />
      </View>
      <TouchableOpacity style={styles.signupbtn} onPress={() => navigation.navigate('Main')}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 200,
    height: 40,
    margin: 20,
    backgroundColor: '#ffff',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },

  signupbtn: {
    width: 200,
    height: 40,
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderColor: '#077294',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,

    marginTop: 20,
  },

  btn: {
    width: 200,
    height: 80,
    margin: 50,
    borderWidth: 2,
    color: '#ffff',
  },
});
