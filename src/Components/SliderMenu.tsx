import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CyberCitiVideo from "../assets/cybercitiVideo.webm";

function SliderMenu() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    infinite: true,
  };

  return (
    <div className="bg-video-container">
      <div className="flex justify-center items-center mt-[50%] w-full text-primary lg:mt-[15%]">
        <Slider {...settings} className="w-[70%] text-center lg:w-[85%]">
          <div>
            <p className="lg:text-2xl">
              ALTDesk პირველი ქართული დისტანციური მართვის პროგრამა
            </p>
            <button className="bg-transparent pt-3 pb-3 pl-6 pr-6 text-white border border-white rounded-full mt-5 w-[175px] lg:text-2xl lg:mt-6">
              გადმოწერე
            </button>
          </div>
          <div className="mt-[50px]">
            <p className="lg:text-2xl">
              ALTCode ალტერნატიული გადაწყვეტილებისთვის
            </p>
          </div>
        </Slider>
      </div>
      <video
        className="hidden lg:block absolute inset-0 object-cover w-full h-full -z-30 mt-[-150px]"
        autoPlay
        loop
        muted
      >
        <source src={CyberCitiVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SliderMenu;
