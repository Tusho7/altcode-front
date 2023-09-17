import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcom";
import LinkedinIcon from "../Icons/LinkdinIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Logo from "../assets/cybercity-logo.png";
import FooterSection from "./FooterSection";

function Footer() {
  return (
    <div className="flex flex-col text-primary mt-[50px] gap-10">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <img src={Logo} className="w-[325px] h-[66px]" />
        <button className="border border-[#253245] p-4 rounded-full text-[#8CFEE7] lg:hidden">
          CONTACT US - AVAILABLE 24X7
        </button>
        <p className="text-sm lg:hidden">Contact@cyberciti.com</p>
        <p className="text-sm lg:hidden">JL Soekamo-hatta</p>
        <p className="text-sm lg:hidden">+021-5557-874</p>
      </div>

      <div className="flex justify-between items-center">
        <FooterSection
          title="სერვისები"
          items={[
            "Risk and Compliance",
            "Penetration Testung",
            "Managed Security",
            "Data Protection",
            "How we work",
          ]}
        />
        <div className="hidden lg:flex">
          <FooterSection
            title="CONTACT US - AVAILABLE 24X7"
            items={[
              "Contact@cybeciti.com",
              "JL Soekamo-hatta",
              "+021-5557-874",
              "",
              "",
              "",
              "",
              "",
            ]}
          />
        </div>

        <FooterSection
          title="პროგრამები"
          items={[
            "Leadership",
            "Partners",
            "Careers",
            "Our clients",
            "Contact Us",
          ]}
        />
      </div>

      <div className="mt-[60px] lg:flex lg:flex-col lg:justify-start lg:items-start">
        <div className="flex gap-3 justify-center items-center pb-6">
          <LinkedinIcon />
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>

        <div className="text-center m-auto text-sm w-[300px] lg:flex lg:justify-start lg:items-start lg:m-0 lg:text-start lg:pb-16">
          <p>Copyright 2023 Cyberciti | Powered by Onecontributor</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
