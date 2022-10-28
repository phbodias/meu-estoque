import styled from "styled-components";

interface Props {
  sidebarIsActive: boolean;
}

const RightSide = styled.div<Props>`
  position: fixed;
  left: ${(props) => (props.sidebarIsActive ? "235px" : "0")};
  width: ${(props) =>
    props.sidebarIsActive ? "calc(100vw - 235px)" : "100vw"};
  transition-timing-function: linear;
  transition-duration: 0.5s;

  @media (max-width: 1100px) {
    left: 0;
    width: 100vw;
  }
`;

export { RightSide };
