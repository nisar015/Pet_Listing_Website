import { useContext } from 'react';
import PetContext from '../context/PetContext';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const PetList = () => {
  const { pets, loading, error } = useContext(PetContext);

  if (loading) {
    return <TailSpin color="#00BFFF" height={80} width={80} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (pets.length === 0) {
    return <div>No pets found</div>;
  }

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <Link to={`/pets/${pet.id}`}>
            <h2>{pet.name}</h2>
          </Link>
          <p>{pet.breed}</p>
          <p>{pet.animal}</p>
          <p>{pet.location}</p>
        </div>
      ))}
    </div>
  );
};

export default PetList;
