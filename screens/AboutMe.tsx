import { StyleSheet, Text, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function AboutMe({ navigation }: RootStackScreenProps<'AboutMe'>) {
  return (
    <View style={styles.container}>
      <Text>About me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
