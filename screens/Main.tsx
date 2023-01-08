import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { setBackgroundColorAsync } from 'expo-system-ui';

export default function Main({ navigation }: RootStackScreenProps<'Login'>) {
  let EmailID = null;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/memoriumlogo.png')}
          style={{
            width: 250,
            height: 250,
            borderRadius: 400 / 2,
            resizeMode: 'contain',
            backgroundColor: '#2314321',
          }}
        ></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
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
