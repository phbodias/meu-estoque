import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
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

interface Props {
  sidebarIsActive: boolean;
}

const RightSide = styled.div<Props>`
  position: fixed;
  left: ${(props) => (props.sidebarIsActive ? "235px" : "0")};
  width: ${(props) =>
    props.sidebarIsActive ? "calc(100vw - 235px)" : "100vw"};
  transition-timing-function: linear;
  transition-duration: 0.5s;

  @media (max-width: 1100px) {
    left: 0;
    width: 100vw;
  }
`;
export default App;
