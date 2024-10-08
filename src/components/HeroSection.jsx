import video1 from "../assets/vid-1.mp4";
import video2 from "../assets/vid-2.mp4";

const HeroSection = () => {
  return (
    
       
          <div className="flex flex-col items-center mt-6 lg:mt-20" id="hero">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
              Experience the Thrill of Speed
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                with McLaren F1
              </span>
            </h1>
            <p className="mt-10 text-2xl text-center text-neutral-300 max-w-4xl font-sans">
              Discover the pinnacle of motorsport engineering and cutting-edge
              technology with the McLaren F1 team. From aerodynamic innovations to
              race-winning strategies, immerse yourself in the adrenaline of Formula 1.
            </p>
            <div className="flex justify-center my-10">
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
              >
                Join the Race
              </a>
              <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Learn More
              </a>
            </div>
            <div className="flex mt-10 justify-center">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
              >
                 <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    
  );
};
export default HeroSection;
      