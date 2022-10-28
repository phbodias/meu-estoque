import IonIcon from "@reacticons/ionicons";
import React, { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface Props {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const SclassNameebar = ({ active, setActive }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <Container active={active}>
      <div className="top">
        <p>Controle</p>
        <IonIcon
          name="close-circle-outline"
          className="ion-icon ion-top"
          onClick={() => setActive(false)}
        ></IonIcon>
      </div>
      <div className="options">
        <ul>
          <p className="category">Gerenciamento</p>

          <Link to="/categories" className="link">
            <li
              className={selected === 1 ? "selected" : ""}
              onClick={() => setSelected(1)}
            >
              <IonIcon name="locate-outline" className="ion-icon"></IonIcon>
              <p>Categorias</p>
            </li>
          </Link>

          <li
            className={selected === 2 ? "selected" : ""}
            onClick={() => setSelected(2)}
          >
            <IonIcon name="list-circle-outline" className="ion-icon"></IonIcon>
            <p>Produtos</p>
          </li>

          <li
            className={selected === 3 ? "selected" : ""}
            onClick={() => setSelected(3)}
          >
            <IonIcon name="layers-outline" className="ion-icon"></IonIcon>
            <p>Fornecedores</p>
          </li>
        </ul>

        <ul>
          <p className="category">Movimentação</p>

          <li
            className={selected === 4 ? "selected" : ""}
            onClick={() => setSelected(4)}
          >
            <IonIcon
              name="arrow-forward-outline"
              className="ion-icon"
            ></IonIcon>
            <p>Entradas</p>
          </li>

          <li
            className={selected === 5 ? "selected" : ""}
            onClick={() => setSelected(5)}
          >
            <IonIcon name="arrow-back-outline" className="ion-icon"></IonIcon>
            <p>Saídas</p>
          </li>
        </ul>

        <ul>
          <p className="category">Administração</p>

          <li
            className={selected === 6 ? "selected" : ""}
            onClick={() => setSelected(6)}
          >
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

export default SclassNameebar;
