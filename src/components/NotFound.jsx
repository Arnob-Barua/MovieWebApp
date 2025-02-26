// Importing the Notfound image
import Notfound from "/404.gif";

// Main NotFound component
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      {/* Displaying the Notfound image */}
      <img className="h-[50%]" src={Notfound} alt="Not Found" />
    </div>
  );
};

export default NotFound;