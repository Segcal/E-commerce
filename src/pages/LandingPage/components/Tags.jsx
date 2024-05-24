import React from 'react'

export default function Tags() {
  return (
    <>
      <div className="text-gray-600 flex items-center lg:w-1/2 md:w-[85%] justify-center capitalize md:gap-32 gap-10 bg-white   mx-auto py-8 rounded-xl md:-mt-12 -mt-4 shadow-lg">
        <main className='flex items-center gap-6'>
          <ul className="flex items-center flex-col ">
            <h2 className="text-xl font-semibold">1K</h2>
            <p className="sm:text-sm text-[0.7rem]">brands</p>
          </ul>
          <ul className="flex items-center flex-col border-l md:px-24 px-10 border-r">
            <h2 className="text-xl font-semibold">500K+</h2>
            <p className="sm:text-sm text-[0.7rem]">customers</p>
          </ul>
          <ul className="flex items-center flex-col">
            <h2 className="text-xl font-semibold">200K+</h2>
            <p className="sm:text-sm text-[0.7rem]">Active merchants</p>
          </ul>
        </main>
      </div>
    </>
  );
}
