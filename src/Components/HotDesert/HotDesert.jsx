import React from "react";
import Food1 from "../../assets/food.png";
import Food2 from "../../assets/food2-plate.png";
import Food3 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const HotDesertData = [
  {
    id: 1,
    name: "Hot Desert",
    img: Food1,
    price: "$5.00",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Cake",
    img: Food2,
    price: "$5.00",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Hot Cake",
    img: Food2,
    price: "$5.00",
    delay: 1.2,
  },
];
const HotDesert = () => {
  return (
    <section>
      <div className="container py-12">
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-dark-green uppercase py-8"
        >
          Hot Desert
        </motion.h3>

        {/* cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDesertData.map((item) => (
            <motion.div
              variants={SlideUp(item.delay)}
              initial="hidden"
              whileInView="show"
              className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
            >
              <img
                src={item.img}
                alt=""
                className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
              />

              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-xl text-yellow-500">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDesert;
