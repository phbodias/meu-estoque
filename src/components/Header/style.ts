import styled from "styled-components";

interface Props {
  sidebarActive: boolean;
}

const Content = styled.div<Props>`
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

  .ion-icon {
    font-size: 27px;
    margin-top: 2px;
    cursor: pointer;

    :hover {
      color: #34b5b8;
    }
  }
  
  .inputSearch {
    display: flex;
    align-items: center;
    width: ${(props) => (props.sidebarActive ? "20%" : "30%")};
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

      :focus {
        min-width: 250px;
      }
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
    box-shadow: 0 0 2px 1px;

    .showSidebar {
      display: block;
    }
  }
`;

export { Content };
