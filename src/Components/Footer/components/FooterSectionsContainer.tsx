import FooterSection from "./FooterSection";

const FooterSectionsContainer = () => {
  return (
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
  );
};

export default FooterSectionsContainer;
