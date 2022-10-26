import styled from "styled-components";

const Container = styled.div`
  width: 255px;
  height: 100vh;
  background-color: #212120;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: zoom-in;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 10%;
    min-height: 50px;
    font-size: 27px;
    font-weight: 500;
    border-bottom: solid 1px #ffffff;
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

        .ion-icon {
          font-size: 25px;
        }

        :hover {
          color: #ffffff;
        }
      }
    }
  }
`;

export { Container };
