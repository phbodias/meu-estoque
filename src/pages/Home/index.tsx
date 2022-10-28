import { useState } from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
      <Header
        actualPage="Home"
        sidebar={sidebarActive}
        toggleSideBar={setSidebarActive}
      />
      <PageTitle
        title="Página Inicial"
        subTitle="Visão geral do estoque"
        iconName="stats-chart-sharp"
      />
    </>
  );
};

export default Home;
