
import './App.css'
import { ColorRing } from "react-loader-spinner";
import { useGlobalContext } from './context/Context'
import Layout from './layout/Layout'

function App() {
  const {loading} = useGlobalContext()
  // console.log(loading)

  return (
    <>
      {loading ? <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div> : <Layout />}
      </>
  )
}

export default App
