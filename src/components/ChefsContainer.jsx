import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";
import { useGlobalContext } from "../context/Context";

const ChefsContainer = () => {
  const [data, setData] = useState([]);

  const {loading, setLoading} = useGlobalContext()
  console.log(dataValue)

  const chefsData = async () => {
    const response = await fetch("chefs.json");
    const data = await response.json();

    console.log(data);
    setData(data);
    setLoading(true)
  };

  useEffect(() => {
    setLoading(false)
    chefsData();
  }, []);

  return (
    <section className="my-7">
      <h1 className="text-center text-5xl font-black my-8">Our <span className="border-b-4 border-orange-500">Chefs</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((chef) => (
          <SingleChef key={chef.id} chef={chef} />
        ))}
      </div>
    </section>
  );
};

export default ChefsContainer;
