import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function ReminderView({ navigation }: RootStackScreenProps<'ReminderView'>) {
  return (
    <View style={styles.container}>
      <Text>Reminder View</Text>

      <TouchableOpacity style={styles.btn} onPress={() => AddReminder(navigation)}>
        <Text>Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddReminder(navigation: any) {
  navigation.navigate('ReminderAdd');
}

const styles = StyleSheet.create({
  container: {},

  btn: {
    width: 200,
    height: 40,
    marginTop: 25,
    justifyContent: 'center',
    borderWidth: 2,

    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderColor: '#077294',
  },
});
