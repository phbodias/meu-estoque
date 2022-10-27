import styled from "styled-components";

interface Props {
  active: boolean;
}

const Container = styled.div<Props>`
  width: ${(props) => (props.active ? "235px" : "0")};
  z-index: 1;
  position: fixed;
  left: 0;
  height: 100vh;
  background-color: #212120;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.active ? "0 10px" : "0")};
  box-sizing: border-box;
  transition-timing-function: linear;
  transition-duration: 0.5s;
  overflow-x: hidden;

  .ion-icon {
    font-size: 25px;
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
        width: fit-content;
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
    }
  }
`;

export { Container };
