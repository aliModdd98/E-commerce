import person from "./../../assets/Avatar.png";

const Ads = () => {
  return (
    <div className="hidden lg:flex flex-grow flex-col max-w-[200px]">
      <div className="flex flex-col w-full bg-light-bg rounded-xl">
        <div className="flex justify-between items-center px-2">
          <img src={person} alt="" />
          <p className="text-16px ms-2">
            Hi, user <br />
            let’s get started
          </p>
        </div>
        <div className="flex flex-col my-3 justify-center w-full items-center">
          <button className="bg-bluebg mb-2 py-2 text-white flex justify-center items-center rounded-xl px-4 w-90">
            Join now
          </button>
          <button className="text-bluebg mb-2 py-2 bg-white flex justify-center items-center rounded-xl px-4 w-90">
            Log in
          </button>
        </div>
      </div>
      <div className="bg-orange w-full rounded-lg mt-3 mb-3">
        <p className="p-4 text-left text-white text-16px">
          Get US $10 off with a new supplier
        </p>
      </div>
      <div className="bg-light-blue w-full rounded-lg mb-3">
        <p className="p-4 text-left text-white text-16px">
          Get US $10 off with a new supplier
        </p>
      </div>
    </div>
  );
};

export default Ads;
