import styled from "styled-components";

interface Props {
  sidebarActive: boolean;
}

const Content = styled.div<Props>`
  top: 0;
  left: ${(props) => (props.sidebarActive ? "235px" : "0")};
  width: ${(props) => (props.sidebarActive ? "calc(100vw - 235px)" : "100vw")};
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
  transition-timing-function: linear;
  transition-duration: 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;

  .top {
    display: flex;
    align-items: center;
    font-size: 25px;

    .ion-icon {
      font-size: 27px;
      margin-top: 2px;
      cursor: pointer;
    }

    p {
      margin-left: 5px;

      @media (max-width: 500px) {
        display: none;
      }
    }
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

  @media (max-width: 800px) {
    left: 0;
    width: 100vw;
    box-shadow: 0 0 5px 3px;
  }
`;

export { Content };
