import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ background: '#eee', padding: '10px' }}>
      <Link to="/about" style={{ margin: '10px' }}>Про мене</Link>
      <Link to="/my-city" style={{ margin: '10px' }}>Моє місто</Link>
      <Link to="/my-future" style={{ margin: '10px' }}>Моє майбутнє</Link>
    </nav>
  );
};

export default Header;
