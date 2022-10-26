import styled from "styled-components";

const Content = styled.div`
  top: 0;
  left: 235px;
  width: calc(100vw - 235px);
  min-width: 360px;
  position: fixed;
  height: 60px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  color: #837f7b;

  .page {
    font-size: 22px;
  }

  .inputSearch {
    display: flex;
    align-items: center;
    width: 30vw;
    min-width: 200px;

    input {
      width: 100%;
      height: 35px;
      border-radius: 9px;
      background-color: #eeedea;
      border: none;
      font-size: 15px;
      padding-left: 15px;
      padding-right: 30px;
      box-sizing: border-box;
      outline: none;
    }

    .search {
      margin-left: -25px;
      cursor: pointer;
    }
  }

  .settings {
  }

  .ion-icon {
    font-size: 20px;
  }

  @media (max-width: 1000px) {
  }
`;

export { Content };
