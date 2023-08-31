import React from 'react';

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-3 text-[#B6B6B6] text-[14px]">
      <button className="border border-[#253245] p-4 rounded-full text-[#8CFEE7]">
        {title}
      </button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default FooterSection;
