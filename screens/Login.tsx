import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  let EmailID = null;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/memoriumlogo.png')} style={styles.logo}></Image>

      <View style={styles.container}>
        <Text style={styles.text}>Email ID</Text>
        <TextInput placeholder="Email" style={styles.textInput} autoCapitalize="none" autoComplete="email" />

        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          autoComplete="password"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => LoginInit(navigation)}>
        <Text>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupbtn} onPress={() => SignUpInit(navigation)}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

function LoginInit(navigation: any) {
  navigation.navigate('Main');
}

function SignUpInit(navigation: any) {
  navigation.navigate('SignUp');
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F4674',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%'
  },

  background:{
    backgroundColor: '#0F4674',
  },

  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },

  signupbtn: {
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: 200,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    borderColor: '#077294',
  },
  textInput: {
    width: 200,
    height: 40,
    margin: 10,
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
