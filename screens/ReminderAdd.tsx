import { StyleSheet, Text, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function ReminderAdd({ navigation }: RootStackScreenProps<'ReminderAdd'>) {
  return (
    <View style={styles.container}>
      <Text>Reminder Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
