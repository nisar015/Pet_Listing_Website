import { useState, useContext } from 'react';
import PetContext from '../context/PetContext';
import { TailSpin } from 'react-loader-spinner';

const SearchForm = () => {
  const { handleSearchPets, loading, error } = useContext(PetContext);
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { animal, location, breed }); 
    handleSearchPets({ animal, location, breed });
  };

  return (
    <div>
      {loading && <TailSpin color="#00BFFF" height={80} width={80} />}
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Animal</label>
          <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Breed</label>
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
