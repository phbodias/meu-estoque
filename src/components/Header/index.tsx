import IonIcon from "@reacticons/ionicons";
import React, { SetStateAction } from "react";
import { Content } from "./style";

interface Props {
  actualPage: string;
  sidebar: boolean;
  toggleSideBar: React.Dispatch<SetStateAction<boolean>>;
}

const Header = ({ actualPage, sidebar, toggleSideBar }: Props) => {
  return (
    <Content sidebarActive={sidebar}>
      <div className="showSidebar">
        <IonIcon
          name="menu-outline"
          className="ion-icon showSidebar"
          onClick={() => toggleSideBar(true)}
        ></IonIcon>
      </div>
      <div className="inputSearch">
        <input type="text" placeholder="Pesquise" />
        <IonIcon name="search-outline" className="search"></IonIcon>
      </div>
      <IonIcon name="settings-outline" className="ion-icon settings"></IonIcon>
    </Content>
  );
};

export default Header;
