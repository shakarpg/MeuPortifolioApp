import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import SkillScreen from '../screens/SkillScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Meu Portfólio' }} />
      <Stack.Screen name="Skills" component={SkillScreen} options={{ title: 'Minhas Habilidades' }} />
    </Stack.Navigator>
  );
}