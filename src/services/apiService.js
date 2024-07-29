import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://pets-v2.dev-apis.com',
});

const handleError = (error) => {
  console.error('API Error:', error);
  throw error;
};

export const fetchPets = async () => {
  try {
    const response = await apiClient.get('/pets');
    return response.data.pets;
  } catch (error) {
    handleError(error);
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await apiClient.get(`/pets?id=${id}`);
    return response.data.pets[0];
  } catch (error) {
    handleError(error);
  }
};

export const searchPets = async ({ animal, location, breed }) => {
  try {
    const response = await apiClient.get(`/pets`, {
      params: { animal, location, breed },
    });
    console.log('API response:', response.data.pets); 
    return response.data.pets;
  } catch (error) {
    handleError(error);
  }
};
