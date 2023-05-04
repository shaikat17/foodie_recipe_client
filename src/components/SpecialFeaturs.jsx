import { NavLink } from "react-router-dom";
import { TbDeviceAnalytics } from "react-icons/tb";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import vegitables from "../assets/vegitabels.jpg";

const SpecialFeaturs = () => {
  return (
    <section
      className="h-screen w-full bg-center bg-cover  bg-no-repeat"
      style={{ backgroundImage: `url(${vegitables})` }}
    >
      <div className="bg-gray-950 w-screen h-screen opacity-60 text-center flex flex-col justify-center items-center space-y-6">
        <h1 className="font-cursive text-6xl text-orange-500 font-black uppercase mb-8">
          Special Features
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 text-orange-500">
          <div className="flex flex-col items-center px-24 md:p-3 space-y-3">
            < TbDeviceAnalytics size={'6rem'} />
            <h3 className="text-2xl font-bold">Food Nutritions</h3>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              ipsa reprehenderit dicta non aliquam? Natus?
            </p>
          </div>
          <div className="flex flex-col items-center px-24 md:p-3 space-y-3">
            <TfiAlarmClock size={'5rem'} />
            <h3 className="text-2xl font-bold">Food Nutritions</h3>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              ipsa reprehenderit dicta non aliquam? Natus?
            </p>
          </div>
          <div className="flex flex-col items-center px-24 md:p-3 space-y-3">
            <FaUsers size={'5rem'} />
            <h3 className="text-2xl font-bold">Food Nutritions</h3>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              ipsa reprehenderit dicta non aliquam? Natus?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeaturs;
