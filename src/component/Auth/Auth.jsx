import { Link } from "react-router-dom";
import { useState } from "react";
let user;
const sendUser = () => {
  user = document.getElementById("loginInput").value;
  document.getElementById("loginInput").value = " ";
};
const Auth = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="flex items-center justify-center  ">
        <div className="bg-white c h-[200px] md:w-[350px] md:h-[230px] flex flex-col gap-5 md:gap-7 shadow-md rounded-lg px-6 py-4 ">
          <h1 className="text-xl md:text-2xl font-bold text-center ">
            Join Chat
          </h1>

          <div>
            <label className="block text-sm md:text-lg font-medium text-[#1a1919]  ">
              Enter Your Name
            </label>
            <input
              type="text"
              id="loginInput"
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm text-sm md:text-lg rounded-md w-full mt-2 py-1 px-2  "
              placeholder="your@name"
              required
            />

            <Link
              onClick={(e) => (!name ? e.preventDefault() : null)}
              to="/chat"
            >
              <button
                type="submit"
                onClick={sendUser}
                className="w-full text-sm md:text-lg flex  justify-center py-1 px-2 mt-4  border border-transparent rounded-md shadow-sm
               font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                join
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
export { user };
