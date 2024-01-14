type CircleSectionType = {
  number: number;
  title: string;
  description: string;
};

const CircleSection = ({ number, title, description }: CircleSectionType) => {
  return (
    <div className="w-full mt-[40px] flex flex-col items-center justify-center">
      <div className="shadow-xl shadow-black font-bold text-2xl bg-gradient-to-b from-amber-400 to-amber-200-85 w-28 h-28 rounded-full">
        <p className="flex items-center justify-center h-full">{number}</p>
      </div>
      <div className="flex flex-col items-center justify-center py-8 space-y-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-neutral-800/85">{description}</p>
      </div>
    </div>
  );
};

export default CircleSection;
