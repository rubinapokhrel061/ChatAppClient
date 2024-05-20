import { user } from "../Auth/Auth.jsx";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Message from "../message/Message.jsx";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ReactScrollToButtom from "react-scroll-to-bottom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";

let socket;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState("");

  const [isConnected, setIsConnected] = useState(false); // New state for connection status

  const send = () => {
    const message = document.getElementById("textarea").value;
    socket.emit("message", { message, id });
    document.getElementById("textarea").value = "";
  };

  useEffect(() => {
    socket = io("https://chatappserver-98b0.onrender.com/");
    socket.on("connect", () => {
      setId(socket.id);
      alert("connected!!");
      setIsConnected(true);
    });
    socket.emit("Joined", { user });

    socket.on("userJoined", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log("user joined");
    });

    socket.on("leave", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log("user left");
    });

    return () => {
      socket.emit("disconnecting");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <>
      <div className="pl-8">
        <section className=" w-[300px]   md:w-[500px]  rounded-2xl max-w-[90%] text-center shadow-lg shadow-slate-400 bg-white">
          <div className="p-[15px] bg-indigo-600 rounded-t-2xl  text-center flex justify-between">
            <div className="flex text-center">
              <IoChatbubbleEllipsesOutline className="text-white text-xl md:text-3xl" />
              <h3 className="md:text-xl">Let's Chat</h3>
            </div>
            <Link to="/">
              <IoMdCloseCircleOutline className="text-white text-xl md:text-3xl" />
            </Link>
          </div>

          <ReactScrollToButtom className="h-[350px] flex flex-col pt-[8px] ">
            {messages.map((item, i) => (
              <Message
                key={i}
                message={item.message}
                user={item.id === id ? "" : item.user}
                type={item.id === id ? "outgoing" : "incoming"}
              />
            ))}
          </ReactScrollToButtom>
          <div className="flex rounded-sm pb-[8px]">
            <input
              id="textarea"
              autoComplete="off"
              className=" h-[40px] w-[200px] md:h-[50px] md:w-[380px] bg-indigo-200 rounded-2xl  mx-2 border-collapse p-[20px] text-base outline-none"
              onKeyPress={(e) => (e.key === "Enter" ? send() : null)}
              placeholder="Write a message..."
            ></input>
            <button
              onClick={send}
              className="h-[40px] w-[45px] md:h-[50px] md:w-[50px] bg-indigo-600 hover:bg-blue-700 text-white rounded-2xl "
            >
              <LuSendHorizonal className="text-2xl ml-3" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chat;
