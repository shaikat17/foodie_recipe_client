import SingleChef from "./SingleChef";
import { useGlobalContext } from "../context/Context";
import { ColorRing } from "react-loader-spinner";

const ChefsContainer = () => {

  const { loading, data, dataLoading, setDataLoading } = useGlobalContext();

  return (
    <section className="my-7">
      <h1 className="text-center text-5xl font-black my-8">
        Our <span className="border-b-4 border-orange-500">Chefs</span>
      </h1>
      {loading ? (
        <div className="flex items-center justify-center h-screen w-screen">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
          {data.map((chef) => (
            <SingleChef key={chef.id} chef={chef} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ChefsContainer;
