import "./Message.css";

const Message = ({ user, message, type }) => {
  if (user) {
    return (
      <>
        <div className={`messageBox ${type}  `}>
          <div className="flex justify-start gap-1">
            {/* <h1 className="text-start text-[10px] text-[#4338ca] ">{time}</h1> */}
            <h1 className="text-start text-[10px] md:text-sm text-[#4338ca] ">
              {user}
            </h1>
          </div>
          <p className="bg-indigo-300 md:text-base  rounded-xl p-2 text-start text-sm ">
            {message}
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`messageBox ${type}`}>
          <div className="flex justify-end gap-1">
            {/* <h1 className="text-start text-[10px] text-[#4338ca] ">{time}</h1> */}
            <h1 className="text-start text-[10px] md:text-sm text-[#4338ca] ">
              You
            </h1>
          </div>
          <p className="bg-indigo-200 md:text-base rounded-xl  p-2 text-sm text-start">
            {message}
          </p>
        </div>
      </>
    );
  }
};

export default Message;
