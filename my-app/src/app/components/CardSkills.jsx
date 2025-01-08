import Image from "next/image";

export default function CardSkills({ text, image }) {
  return (
    // <div className="flex flex-col gap-4 bg-secondary-page hover:bg-tertiary-page rounded-2xl py-6">
    //   <Image className="flex-1 px-6" src={image} alt="Jony" height={150} width={150} />
      
    //   <p className="text-center flex-1 text-xl">{text}</p>
    // </div>

    <div className="flex flex-col gap-6 bg-secondary-page hover:bg-tertiary-page rounded-2xl pt-8 px-8 md:pt-14 md:px-12">
      {/* Wrapper with fixed height and automatic width */}
      <div className="relative w-auto h-[60px]  md:w-28 md:h-[85px] ">
        <Image
          className="object-contain rounded-2xl"
          src={image}
          alt={text}
          layout="fill"    // Fill the container with the image while maintaining aspect ratio
        />
      </div>
      <p className="text-center text-lg mb-4">{text}</p>
    </div>
  );
}
