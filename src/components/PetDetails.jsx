import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PetContext from '../context/PetContext';
import { TailSpin } from 'react-loader-spinner';

const PetDetails = () => {
  const { fetchPetDetails, loading, error } = useContext(PetContext);
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const getPetDetails = async () => {
      const petDetails = await fetchPetDetails(id);
      setPet(petDetails);
    };

    getPetDetails();
  }, [id, fetchPetDetails]);

  if (loading) {
    return <TailSpin color="#00BFFF" height={80} width={80} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetDetails;
