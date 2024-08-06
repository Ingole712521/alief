import "../style/Preloader.css";
import preloaderVideo from "../assets/background.mp4"; // Ensure the path is correct

const Preloader = () => {
    return (
      <div className="preloader">
        <video className="preloader-video" autoPlay muted>
          <source src={preloaderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default Preloader;
