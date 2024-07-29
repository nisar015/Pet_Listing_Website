import { createContext, useState, useEffect } from 'react';
import { fetchPets, fetchPetById, searchPets } from '../services/apiService';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, []);

  const fetchPetDetails = async (id) => {
    setLoading(true);
    try {
      const petDetails = await fetchPetById(id);
      return petDetails;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSearchPets = async ({ animal, location, breed }) => {
    setLoading(true);
    console.log('Searching pets with:', { animal, location, breed });
    try {
      const petsData = await searchPets({ animal, location, breed });
      console.log('Search results:', petsData);
      setPets(petsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PetContext.Provider value={{ pets, selectedPetId, setSelectedPetId, fetchPetDetails, handleSearchPets, loading, error }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContext;
