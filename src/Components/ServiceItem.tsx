function ServiceItem({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="group flex flex-col gap-4 justify-start text-center pt-[20px] items-center w-[158px] h-[230px] bg-[#0D1620] border-[2px] border-[#253245] rounded-lg text-base lg:text-xl pl-[10px] pr-[10px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-[#8CFEE7] hover:shadow-md">
      <img src={imageSrc} className="w-[60px] h-[60px]" alt={title} />
      <p>{title}</p>

      <div className="opacity-0 group-hover:opacity-100 hover:cursor-pointer">
        <p className="text-[#D4FF84]">ვრცლად</p>
      </div>
    </div>
  );
}

export default ServiceItem;
