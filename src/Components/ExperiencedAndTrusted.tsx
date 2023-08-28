import ExperiencedLogo1 from "../assets/experiencedLogo1.jpg";
import ExperiencedLogo2 from "../assets/experiencedLogo2.jpg";

function ExperiencedAndTrusted() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-[220px] md:flex-row">
      <div className="border-[2px] border-[#253245] rounded-lg flex justify-center items-center w-[330px]">
        <img src={ExperiencedLogo1} className="w-[160px] h-[290px]" />
        <img src={ExperiencedLogo2} className="w-[160px] h-[290px]" />
      </div>

      <div className="border-[2px] border-[#253245] flex flex-col gap-4 w-[330px] pt-[30px] pb-[30px] pl-[20px] pr-[20px] rounded-lg">
        <h1 className="border border-[#253245] p-[10px] text-[#8CFEE7] rounded-full text-sm">
          პირველი ქართული პროგრამა ALTDESK
        </h1>

        <p className="text-primary text-3xl pt-[15px]">
          Experienced and <span className="text-[#8CFEE7]">Trusted</span>
        </p>

        <p className="text-[#B6B6B6] text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis montes
          tellus facilisis inceptos vitae, est laoreet enim felis lacinia
          himenaeos iaculis mi tellus nascetur convallis.
        </p>

        <p className="leading-4 hover:text-[#D9E767] hover:transform hover:translate-y-[-5px] transition-transform hover:cursor-pointer">
          <span className="text-primary hover:text-[#D9E767]">Read More</span>
          <span className="block h-[1px] w-20 mt-1 bg-primary mx-auto"></span>
        </p>
      </div>

      <div className="relative flex justify-center items-center border-[2px] border-[#548082] bg-[#152D32] rounded-lg w-[330px] p-8 pb-[80px] mt-[50px]">
        <h1 className="text-3xl text-primary">
          ჩვენ გაგიმარტივებთ მუშაობის პროცესს
        </h1>

        <div className="w-[375px] h-[1px] bg-[#548082] absolute top-[190px]"></div>
      </div>
    </div>
  );
}

export default ExperiencedAndTrusted;
