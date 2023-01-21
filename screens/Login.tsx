import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  let EmailID = null;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/memoriumwhite.png')} style={styles.logo}></Image>
      <TextInput placeholder="Email" placeholderTextColor={'rgba(60, 60, 67, 0.6)'} style={styles.textInput} autoCapitalize="none" autoComplete="email" />
      <TextInput
        placeholder="Password"
        placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
        secureTextEntry={true}
        style={styles.textInput}
        autoComplete="password"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={() => LoginInit(navigation)}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don't have an account?  
          <Text style={styles.signUp} onPress={() => SignUpInit(navigation)}> Sign up here</Text> 
        </Text>
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
    // justifyContent: 'center',
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
    marginTop: 242,
    marginBottom: 38,
    // position: 'absolute',
    // top: 240,
  },

  button: {
    borderWidth: 2,
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 100,
    width: 311,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0F4674',
  },

  buttonText:{
    fontSize: 17,
    fontWeight: '600',
  },

  signUpText:{
    color: '#fff',
    marginTop: 15,


  },

  signUp:{
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },

  textInput: {
    width: 375,
    height: 44,
    marginBottom: 27,
    borderWidth: 1,
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
