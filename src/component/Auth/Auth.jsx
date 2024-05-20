import { Link } from "react-router-dom";
import { useState } from "react";
let user;

const sendUser = () => {
  user = document.getElementById("loginInput").value;
  document.getElementById("loginInput").value = " ";
};
const Auth = () => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const handleClick = (e) => {
    if (name) {
      null;
    } else {
      e.preventDefault();
      setErr({
        message: "UserName is required!",
      });
    }
  };
  const handleChange = (e) => {
    setName(e.target.value);
    setErr("");
  };

  return (
    <>
      <div>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Join chat</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="text"
                      id="loginInput"
                      autoComplete="off"
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label className="absolute left-0 -top-3.8 md:-top-4 text-gray-600 text-sm peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 transition-all  peer-focus:-top-3.5  peer-focus:text-sm">
                      Enter Your Name
                    </label>
                    {err.message && (
                      <span className="text-[#e74c3c]  text-[10px] block">
                        {err.message}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <Link onClick={handleClick} to="/chat">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
export { user };
