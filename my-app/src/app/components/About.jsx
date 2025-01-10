import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex gap-32">
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

      <div className="bg-dark-page-color mt-10 border border-1">
        <p className="text-5xl text-center pt-8">About Me</p>
        <div className="border border-1 flex mt-24 justify-center items-center">
          <div className="border border-1">
            <Image
              src="/images/jony.png"
              alt="Jony"
              width={400}
              height={400}
            />
          </div>
          <div className="border border-1">
            <div className="flex justify-center mt-10">
              <div className="border border-1 p-6">
                <p>aaaaaa aaaaaa</p>
                <p>aaaaaa aaaaaa</p>
              </div>
              <div className="border border-1 p-6">
                <p>bbbbb cccccc</p>
                <p>bbbbb cccccc</p>
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
