import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    <div className="flex justify-center items-center mt-[50%] w-full text-primary">
      <Slider {...settings} className="w-[70%] text-center">
        <div>
          <p>ALTDesk პირველი ქართული დისტანციური მართვის პროგრამა</p>
          <button className="bg-transparent pt-3 pb-3 pl-6 pr-6 text-white border border-white rounded-full mt-5 w-[175px]">
            გადმოწერე
          </button>
        </div>
        <div className="mt-[50px]">
          <p>ALTCode ალტერნატიული გადაწყვეტილებისთვის</p>
        </div>
      </Slider>
    </div>
  );
}

export default SliderMenu;
