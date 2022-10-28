import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { RightSide } from "./components/style";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
      <RightSide sidebarIsActive={sidebarActive}>
        <Header
          actualPage="Home"
          sidebar={sidebarActive}
          toggleSideBar={setSidebarActive}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RightSide>
    </BrowserRouter>
  );
};


export default App;
