function ServiceItem({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="flex flex-col gap-4 justify-start text-center pt-[20px] items-center w-[158px] h-[230px] bg-[#0D1620] border border-[#253245] rounded-lg text-base lg:text-xl pl-[10px] pr-[10px]">
      <img src={imageSrc} className="w-[60px] h-[60px]" alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default ServiceItem;
