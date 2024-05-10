import "./Message.css";

const Message = ({ user, message, type }) => {
  if (user) {
    return (
      <>
        <div className={`messageBox ${type}  `}>
          <h1 className="text-start text-[10px] text-[#4338ca] ">{user}</h1>

          <p className="bg-[#e3e1f8] rounded-xl p-2 text-start text-sm">
            {message}
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`messageBox ${type}`}>
          <h1 className="text-end text-[10px] text-[#4338ca]">You</h1>

          <p className="bg-[#e3e1f8] rounded-xl p-2 text-sm text-start">
            {message}
          </p>
        </div>
      </>
    );
  }
};

export default Message;
