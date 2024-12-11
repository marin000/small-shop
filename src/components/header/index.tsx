import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';

const Header = () => {
  return (
    <header className="z-40 py-2 px-12 bg-black flex items-center justify-center">
      <h1 className="flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="app logo" className="w-20 h-12" />
          <span className="text-white text-2xl font-semibold ml-4 mr-12">
            Grab & Go
          </span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
