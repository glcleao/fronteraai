import fronteraLogo from '../assets/frontera-logo.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={fronteraLogo} 
        alt="Frontera" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;