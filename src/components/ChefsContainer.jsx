import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";
import { useGlobalContext } from "../context/Context";
import { ColorRing } from "react-loader-spinner";

const ChefsContainer = () => {
  const [data, setData] = useState([]);

  const { loading, setLoading } = useGlobalContext();
  //   console.log(dataValue);

  const chefsData = async () => {
    const response = await fetch("chefs.json");
    const data = await response.json();

    // console.log(data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    chefsData();
  }, []);

  return (
    <section className="my-7">
      <h1 className="text-center text-5xl font-black my-8">
        Our <span className="border-b-4 border-orange-500">Chefs</span>
      </h1>
      {loading ? (
        <div className="flex items-center justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((chef) => (
            <SingleChef key={chef.id} chef={chef} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ChefsContainer;
