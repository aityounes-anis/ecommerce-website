import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image src="../../images/logo.svg" alt="LOGO" width={50} height={50} />
        <p className="font-bold text-md">El SAJAD</p>
      </div>
    </div>
  );
};

export default Logo;
