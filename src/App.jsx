import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./component/Auth/Auth";
import Chat from "./component/chat/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        {/* <Route path="/" Component={Auth}></Route> */}
        <Route path="/Chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
