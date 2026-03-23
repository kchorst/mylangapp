// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import LanguageScreen from './src/screens/LanguageScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';

type RootStackParamList = {
  LanguageScreen: undefined;
  CategoryScreen: undefined;
  VocabularyScreen: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageScreen" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="LanguageScreen"
          component={LanguageScreen}
          options={{ title: 'Select Language' }}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{ title: 'Select Category' }}
        />
        <Stack.Screen
          name="VocabularyScreen"
          component={VocabularyScreen}
          options={{ title: 'Vocabulary' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
