import IonIcon from "@reacticons/ionicons";
import React, { SetStateAction, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActualPageContext from "../../contexts/pageContext";
import { Container } from "./style";

interface Props {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const SclassNameebar = ({ active, setActive }: Props) => {
  const navigate = useNavigate();
  const { actualPage, setActualPage } = useContext(ActualPageContext);

  const pages = {
    1: "",
    2: "products",
    3: "providers",
    4: "movimentations/inputs",
    5: "movimentations/outputs",
    6: "",
  };

  /* function changePage(index: number) {
    const page: number = Number(index) || 1;
    navigate(`/${pages[page]}`);
  }
 */
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

          <Link to="/products" className="link">
            <li
              className={selected === 2 ? "selected" : ""}
              onClick={() => setSelected(2)}
            >
              <IonIcon
                name="list-circle-outline"
                className="ion-icon"
              ></IonIcon>
              <p>Produtos</p>
            </li>
          </Link>

          <Link to="/providers" className="link">
            <li
              className={selected === 3 ? "selected" : ""}
              onClick={() => setSelected(3)}
            >
              <IonIcon name="layers-outline" className="ion-icon"></IonIcon>
              <p>Fornecedores</p>
            </li>
          </Link>
        </ul>

        <ul>
          <p className="category">Movimentação</p>

          <Link to="/movimentations/inputs" className="link">
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
          </Link>

          <Link to="/movimentations/outputs" className="link">
            <li
              className={selected === 5 ? "selected" : ""}
              onClick={() => setSelected(5)}
            >
              <IonIcon name="arrow-back-outline" className="ion-icon"></IonIcon>
              <p>Saídas</p>
            </li>
          </Link>
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

        <Link to="/" onClick={() => setSelected(0)}>
          <button className="backToHome">Voltar para home</button>
        </Link>
      </div>
    </Container>
  );
};

export default SclassNameebar;
