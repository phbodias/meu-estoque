import styled from "styled-components";

interface Props {
  sidebar: boolean;
}

const Content = styled.div<Props>`
  position: fixed;
  top: 60px;
  left: ${(props) => (props.sidebar ? "235px" : "0")};
  width: fit-content;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #837f7b;
  transition-timing-function: linear;
  transition-duration: 0.5s;
  overflow-x: hidden;

  .title {
    display: flex;
    font-size: 40px;

    p {
      margin-left: 5px;
    }
  }

  .subtitle {
    margin-top: 10px;
    color: lightblue;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    left: 0;
  }
`;

export { Content };
