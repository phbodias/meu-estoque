import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Header actualPage="Home" />
      <PageTitle
        title="Página Inicial"
        subTitle="Visão geral do estoque"
        iconName="stats-chart-sharp"
      />
    </>
  );
};

export default Home;
