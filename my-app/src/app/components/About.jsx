import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex gap-32 mt-20">
        <div className="flex-1 flex justify-end">
          <div className="bg-yellow-dif rounded-full">
            <Image src="/images/jony.png" alt="Jony" width={400} height={400} />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="text-center content-center">
            <p className="text-xl text-new-gray">Hello, I'm</p>
            <p className="text-5xl text-white">João Gomes</p>
            <p className="text-3xl text-new-gray">Web developer</p>
            <div className="space-x-4 mt-4">
              <button className="text-base font-semibold px-6 py-2 bg-yellow-dif text-page-color rounded-full hover:bg-blue-700">
                Download CV
              </button>
              <button className="text-base font-semibold px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-gray-700">
                Contact Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-40 scroll-mt-10" id="about">
        <p className=" text-lg text-new-gray text-center">Get To Know More</p>
        <p className="text-5xl text-center mt-4">About Me</p>
        <div className="flex mt-12 justify-center items-center gap-8">
          <div className="basis-2/5 flex justify-end">
            <Image
            className="bg-dark-page-color rounded-3xl"
              src="/images/jony.png"
              alt="Jony"
              width={450}
              height={450}
            />
          </div>
          <div className="basis-3/5 px-6">
            <div className="flex justify-start mt-10 gap-10 text-center">
              <div className="border border-1 rounded-3xl py-6 px-20">
                <p>---</p>
                <p>Experience</p>
                <p>2+ years</p>
                <p>Frontend Development</p>
              </div>
              <div className="border border-1 rounded-3xl py-6 px-20">
              <p>---</p>
                <p>Experience</p>
                <p>2+ years</p>
                <p>Frontend Development</p>
              </div>
            </div>
            <p className="mt-10 max-w-3xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              dolores inventore hic eaque explicabo iusto voluptatum accusamus,
              doloremque deleniti accusantium earum repudiandae doloribus
              reiciendis quis libero? Ea quos quibusdam odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
