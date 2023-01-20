import { StyleSheet, Text, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function JournalAdd({ navigation }: RootStackScreenProps<'JournalAdd'>) {
  return (
    <View style={styles.container}>
      <Text>Journal Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
