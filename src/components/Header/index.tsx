import IonIcon from "@reacticons/ionicons";
import { Content } from "./style";

interface Props {
  actualPage: string;
}

const Header = ({ actualPage }: Props) => {
  return (
    <Content>
      <p className="page">{actualPage}</p>
      <div className="inputSearch">
        <input type="text" placeholder="Pesquise"/>
        <IonIcon name="search-outline" className="search"></IonIcon>
      </div>
      <IonIcon name="settings-outline" className="ion-icon settings"></IonIcon>
    </Content>
  );
};

export default Header;
