import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    // Exemple : retour à la page de connexion
    navigation.navigate('Login');
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
