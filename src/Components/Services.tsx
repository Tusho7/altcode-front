import ServiceItem from "./ServiceItem";
import ServicesLogo from "../assets/services.png";

function Services() {
  const serviceItems = [
    { title: "პროგრამირება", imageSrc: ServicesLogo },
    { title: "WEB დეველოპმენტი", imageSrc: ServicesLogo },
    { title: "ქსელური ინფრასტრუქტურა", imageSrc: ServicesLogo },
    { title: "VPN სერვისი", imageSrc: ServicesLogo },
    { title: "სერვერები და ვირტუალიზაცია", imageSrc: ServicesLogo },
    { title: "IT ინფრასტრუქტურა", imageSrc: ServicesLogo },
    { title: "უსაფრთხოების სისტემები", imageSrc: ServicesLogo },
    { title: "სატელეკომუნიკაციო სისტემები", imageSrc: ServicesLogo },
  ];
  return (
    <div className="mt-[150px] text-primary flex flex-col justify-center items-center">
      <h1 className="text-4xl">
        ჩვენი <span className="text-[#88FEE7]">სერვისები</span>
      </h1>

      <div className="flex flex-wrap gap-4 mt-[40px] justify-center">
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
