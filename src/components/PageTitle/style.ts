import styled from "styled-components";

const Content = styled.div`
  position: fixed;
  top: 60px;
  left: 235px;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #837f7b;

  .title {
    display: flex;
    font-size: 40px;

    p {
      margin-left: 5px;
    }
  }

  .subtitle{
    margin-top: 10px;
    color: lightblue;
    font-size: 20px;
  }
`;

export { Content };
