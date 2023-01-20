import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import { RootStackScreenProps } from '../types';

export default function JournalView({ navigation }: RootStackScreenProps<'JournalView'>) {
  return (
    <View style={styles.container}>
      <Text>Journal View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
