import styled from "styled-components";

export const Container = styled.div`
  background: #d9455f;
`;

export const Row = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 490px) {
    flex-direction: column-reverse;
  }
`;
export const Content = styled.div`
  flex: 1;
`;
export const Sidebar = styled.div`
  flex-basis: 30%;
  padding: 10px;
`;
