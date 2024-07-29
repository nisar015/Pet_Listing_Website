import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header>
      <nav>
        <ul>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pets">Pet List</Link></li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
