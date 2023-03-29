/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Register from '../screens/Register';
import Main from '../screens/Main';
import Camera_ from '../screens/Camera_';
import JournalAdd from '../screens/JournalAdd';
import JournalView from '../screens/JournalView';
import ReminderAdd from '../screens/ReminderAdd';
import ReminderView from '../screens/ReminderView';
import AboutMe from '../screens/AboutMe';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ title: '', headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ title: '' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: '' }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="Camera_" component={Camera_} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="JournalAdd" component={JournalAdd} options={{ title: 'Add Journal' }} />
      <Stack.Screen name="JournalView" component={JournalView} options={{ title: 'Journal' }} />
      <Stack.Screen name="ReminderAdd" component={ReminderAdd} options={{ title: 'Add Reminder' }} />
      <Stack.Screen name="ReminderView" component={ReminderView} options={{ title: 'Reminder' }} />
      <Stack.Screen name="AboutMe" component={AboutMe} options={{ title: '' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
