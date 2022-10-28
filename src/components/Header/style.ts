import styled from "styled-components";

interface Props {
  sidebarActive: boolean;
}

const Content = styled.div<Props>`
  top: 0;
  left: ${(props) => (props.sidebarActive ? "235px" : "0")};
  width: ${(props) => (props.sidebarActive ? "calc(100vw - 235px)" : "100vw")};
  position: fixed;
  height: 60px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  color: #837f7b;
  overflow-x: hidden;
  overflow-y: hidden;
  transition-timing-function: linear;
  transition-duration: 0.5s;

  * {
    transition-timing-function: linear;
    transition-duration: 0.5s;
  }

  .top {
    display: flex;
    align-items: center;
    font-size: 25px;

    .ion-icon {
      font-size: 27px;
      margin-top: 2px;
      cursor: pointer;

      :hover {
        color: #34b5b8;
      }
    }

    .showSidebar {
      font-size: ${(props) => (props.sidebarActive ? "0" : "27px")};
    }

    p {
      margin-left: 5px;
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
    font-size: 20px;
    :hover {
      color: #34b5b8;
    }
  }

  @media (max-width: 1100px) {
    left: 0;
    width: 100vw;
    box-shadow: 0 0 2px 1px;

    .top {
      .showSidebar {
        font-size: 27px;
      }
    }
  }

  @media (max-width: 500px) {
    .top {
      p {
        font-size: 0;
      }
    }
  }
`;

export { Content };
