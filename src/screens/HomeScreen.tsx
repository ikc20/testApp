import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }: any) => {
  const handleLogout = async () => {
    Alert.alert('Déconnexion', 'Êtes-vous sûr de vouloir vous déconnecter ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Oui',
        onPress: async () => {
          await AsyncStorage.removeItem('userToken'); // Suppression du token
          navigation.navigate('Login'); // Retour à l'écran de connexion
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur la page d'accueil !</Text>
      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
