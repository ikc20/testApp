import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Écran de connexion */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Connexion' }}
        />
        {/* Écran d'accueil */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Accueil' }}
        />
        <Stack.Screen
        name="Categories"
         component={CategoriesScreen}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
