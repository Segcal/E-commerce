import React from 'react'

export default function Tags() {
  return (
    <>
      <div className="flex items-center justify-center capitalize md:gap-32 gap-10 bg-white lg:w-1/2 md:w-[80%] w-[85%]  mx-auto py-8 rounded-xl md:-mt-12 -mt-8 shadow-lg">
        <ul className="flex items-center flex-col">
          <h2 className="text-xl font-semibold">1K</h2>
          <p className="text-[0.5rem]">brands</p>
        </ul>
        <ul className="flex items-center flex-col border-l md:px-24 px-10 border-r">
          <h2 className="text-xl font-semibold">500K+</h2>
          <p className="text-[0.5rem]">customers</p>
        </ul>
        <ul className="flex items-center flex-col">
          <h2 className="text-xl font-semibold">200K+</h2>
          <p className="text-[0.5rem]">Active merchants</p>
        </ul>
      </div>
    </>
  );
}
