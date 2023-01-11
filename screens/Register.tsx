import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { TextInput, SafeAreaView, Button } from 'react-native';
import { RootStackScreenProps } from '../types';

export default function Resgister({ navigation }: RootStackScreenProps<'Register'>) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postName: 'signup' }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete your profile</Text>

      <View style={styles.container}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.textInput} autoCapitalize="none" autoComplete="name" />

        <Text style={styles.text}>Gender</Text>
        <TextInput style={styles.textInput} autoComplete="gender" autoCapitalize="none" />
      </View>

      <Button title="Save" onPress={() => navigation.navigate('Root')}></Button>
    </View>
  );
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
