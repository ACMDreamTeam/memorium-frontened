import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../types';


export default function Main({ navigation }: RootStackScreenProps<'Login'>) {
  let EmailID = null;

  return (
    <View style={[styles.container]}>
      <View style={[{ flexDirection: 'row' }]}>
        <Image
          source={require('../assets/images/user.png')}
          style={{
            width: 40,
            height: 40,
            marginTop: 80,
            marginStart: 15,
          }}
        ></Image>
        <TextInput placeholder="Email" style={styles.textInput} autoCapitalize="none" autoComplete="email" />
      </View>

      <View style={styles.BackCard}>
        <View style={styles.flexbox2}>
          <TouchableOpacity style={styles.roundButton} onPress={() => openCamera(navigation)}>
            <Text style={styles.btnTxt}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.btnTxt}>I'm a button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.btnTxt}>I'm a button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.btnTxt}>I'm a button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  function openCamera(navigate: any) {
    navigation.navigate('Camera_');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTxt:{
    color:'white',
  },

  flexbox1: {
    flex: 1,
    flexDirection: 'row',
  },
  flexbox2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },

  BackCard: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
 

  roundButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 80,
    marginStart: 15,
    color: "white",
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
