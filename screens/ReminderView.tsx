import { StyleSheet, Text, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function ReminderView({ navigation }: RootStackScreenProps<'ReminderView'>) {
  return (
    <View style={styles.container}>
      <Text>Reminder View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
