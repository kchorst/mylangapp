// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import categories from './src/data/categories.json';

// Import your screens
import LanguageScreen from './src/screens/LanguageScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';

type RootStackParamList = {
  LanguageScreen: undefined;
  CategoryScreen: { selectedLanguage: string };
  VocabularyScreen: { 
    selectedLanguage: string;
    selectedCategory: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const getCategoryTitle = (categoryId: string) => {
  const match = categories.find((c) => c.id === categoryId);
  return match?.label ?? 'Vocabulary';
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LanguageScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen
          name="LanguageScreen"
          component={LanguageScreen}
          options={{ title: 'Languages' }}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
            title: 'Categories',
            headerStyle: { backgroundColor: '#001f4d' },
          }}
        />
        <Stack.Screen
          name="VocabularyScreen"
          component={VocabularyScreen}
          options={({ route }) => ({
            title: getCategoryTitle(route.params.selectedCategory),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
