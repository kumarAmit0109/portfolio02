import loadericon from "../assets/loadericon.png";
function Loader() {
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#09090b] dark:border-white"></div>
        <img src={loadericon} className=" w-16" />
      </div>
    </div>
  );
}

export default Loader;
