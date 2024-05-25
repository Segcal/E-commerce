import React from 'react'

export default function Hero() {
  return (
    <main className="flex  items-center mt-16 md:flex-row flex-col gap-6 bg-gray-100 justify-between relative max-w-full">
      <div className="text-center md:text-start md:justify-start justify-center md:items-start items-center flex flex-col">
        <h1 className="capitalize text-3xl lg:text-6xl text-black">
          discover <span className="text-yellow leading-10">comfort</span>{" "}
          <br className="hidden md:block" /> and{" "}
          <span className="text-yellow">style</span>
        </h1>
        <p className="w-[20rem] py-4 text-[1.1rem] leading-7 text-gray-600">
          Explore our exclusive collection of chairs designed for every room and
          occasion.
        </p>
        <button className="bg-purple  text-white px-4 py-2 rounded-md transition-all ease-in duration-150  hover:opacity-80">
          Shop Now
        </button>
      </div>
      <div>
        <main className="relative md:hidden w-full">
          <div className="bg-purple w-72 h-72 rounded-full"></div>
          <div className="absolute top-0 w-full">
            <img
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1716243343/image_269_1_h4paf4.png"
              alt=""
              width={2000}
            />
          </div>
        </main>
      </div>
      <article className="md:absolute md:left-[20rem] lg:left-[55rem] hidden md:block">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dtrqikle5/image/upload/v1716243343/image_269_1_h4paf4.png"
            alt=""
            className="lg:w-2/2"
          />
          <div className="md:absolute left-64 top-24">
            <img
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1716243380/image_270_1_i8h32i.png"
              alt=""
              className="lg:w-2/2 md:w-full"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
