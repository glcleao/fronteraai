import { useNavigate } from 'react-router-dom';
import fronteraLogo from '../assets/frontera-logo.png';

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <img 
        src={fronteraLogo} 
        alt="Frontera" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;