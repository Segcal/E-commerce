import React from "react";
import Marquee from "react-fast-marquee";

export default function Category() {
  const items = [
    {
      image:
        "https://res.cloudinary.com/dtrqikle5/image/upload/v1716668769/Frame_1437253944_ugpwpq.png",
      name: "Living Room Chairs",
    },
    {
      image:
        "https://res.cloudinary.com/dtrqikle5/image/upload/v1716669397/Frame_1437253944_1_lxxwbn.png",
      name: "Dining Tables",
    },
    {
      image:
        "https://res.cloudinary.com/dtrqikle5/image/upload/v1716669401/Frame_1437253944_2_zs9p9b.png",
      name: "Office Desks",
    },
    {
      image:
        "https://res.cloudinary.com/dtrqikle5/image/upload/v1716669403/Frame_1437253944_3_f7bboz.png",
      name: "Outdoor Chairs ",
    },
  ];

  return (
    <>
      <section className="lg:px-24 md:px-20 px-10 md:mt-24 mt-14">
        <div className="">
          <h1 className="font-semibold text-2xl">Popular Category</h1>
        </div>
        <Marquee pauseOnHover direction="right">
          <div className="flex items-center py-4 justify-center gap-6 mt-6">
            {items.map((item, index) => (
              <article
                key={index}
                className="bg-white shadow-md px-4 py-2 rounded-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-52 h-44 md:h-56 md:w-64 hover:scale-105 transition-all ease-in-out duration-200"
                />
                <p className="md:text-xl text-sm py-2 ">{item.name}</p>
              </article>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
}
