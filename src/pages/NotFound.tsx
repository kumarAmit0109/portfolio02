import notfound from "../assets/notfound.png";
function NotFound() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto flex justify-center items-center pt-16 pb-28 mt-48 text-2xl ">
      <img src={notfound} className="w-72" />
    </div>
  );
}

export default NotFound;
