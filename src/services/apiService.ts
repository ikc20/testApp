import axios from 'axios';

// Crée une instance Axios configurée
const api = axios.create({
  baseURL: 'https://api.caisse.fcpo.agency/api', // URL de base de l'API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour le login
export const login = async (email: string, password: string): Promise<string> => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });

    // Retourne le token si la connexion est réussie
    return response.data.token;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export default api;
