import IonIcon from "@reacticons/ionicons";
import React, { SetStateAction } from "react";
import { Container } from "./style";

interface Props {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ active, setActive }: Props) => {
  const set = () => {
    setActive(false);
  };
  return (
    <Container active={active}>
      <div className="top">
        <p>Controle</p>
        <IonIcon
          name="close-circle-outline"
          className="ion-icon ion-top"
          onClick={set}
        ></IonIcon>
      </div>
      <div className="options">
        <ul>
          <p className="category">Gerenciamento</p>
          <li>
            <IonIcon name="list-circle-outline" className="ion-icon"></IonIcon>
            <p>Produtos</p>
          </li>
          <li>
            <IonIcon name="locate-outline" className="ion-icon"></IonIcon>
            <p>Categorias</p>
          </li>
          <li>
            <IonIcon name="layers-outline" className="ion-icon"></IonIcon>
            <p>Fornecedores</p>
          </li>
        </ul>
        <ul>
          <p className="category">Movimentação</p>
          <li>
            <IonIcon
              name="arrow-forward-outline"
              className="ion-icon"
            ></IonIcon>
            <p>Entradas</p>
          </li>
          <li>
            <IonIcon name="arrow-back-outline" className="ion-icon"></IonIcon>
            <p>Saídas</p>
          </li>
        </ul>
        <ul>
          <p className="category">Administração</p>
          <li>
            <IonIcon
              name="people-circle-outline"
              className="ion-icon"
            ></IonIcon>
            <p>Usuários</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
