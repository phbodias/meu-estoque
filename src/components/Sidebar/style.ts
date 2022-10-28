import styled from "styled-components";

interface Props {
  active: boolean;
}

const Container = styled.div<Props>`
  width: 235px;
  z-index: 1;
  position: fixed;
  left: 0;
  height: 100vh;
  background-color: #212120;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  transition-timing-function: linear;
  transition-duration: 0.5s;

  * {
    transition-timing-function: linear;
    transition-duration: 0.5s;
  }

  .ion-icon {
    font-size: 25px;
    cursor: pointer;
  }

  .ion-top {
    font-size: 0;
  }

  .top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 60px;
    min-height: 50px;
    font-size: 22px;
    border-bottom: solid 1px #dddddd;
    margin-bottom: 20px;
  }

  .options {
    width: 90%;

    ul {
      margin-bottom: 20px;

      .category {
        font-size: 17px;
        margin-bottom: 10px;
      }

      li {
        width: 200px;
        height: 30px;
        display: flex;
        align-items: center;
        margin: 10px 5px;
        font-size: 15px;
        padding: 3px 0;
        color: #c5c0c6;
        cursor: pointer;

        p {
          margin-left: 7px;
        }

        :hover {
          color: #ffffff;
        }
      }

      .selected {
        color: #59c3e0;
        -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
        -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);

        :hover {
          color: #59c3e0;
        }
      }
    }
  }

  @media (max-width: 1100px) {
    width: ${(props) => (props.active ? "235px" : "0")};
    padding: ${(props) => (props.active ? "0 10px" : "0")};

    .ion-icon {
      font-size: ${(props) => (props.active ? "25px" : "0")};
    }

    .ion-top {
      font-size: ${(props) => (props.active ? "27px" : "0")};

      :hover {
        color: #34b5b8;
      }
    }

    .top {
      width: ${(props) => (props.active ? "90%" : "0")};
      font-size: ${(props) => (props.active ? "22px" : "0")};
    }

    .options {
      ul {
        .category {
          font-size: ${(props) => (props.active ? "17px" : "0")};
        }

        li {
          width: ${(props) => (props.active ? "200px" : "0")};
          font-size: ${(props) => (props.active ? "15px" : "0")};
        }
      }
    }
  }
`;

export { Container };
