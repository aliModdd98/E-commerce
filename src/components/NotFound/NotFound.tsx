import error from "./../../assets/error.jpg";
const NotFound = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <img src={error} alt="error" className="w-[280px] h-[280px]" />
      <h1>Oops! Page not found</h1>
    </div>
  );
};

export default NotFound;
