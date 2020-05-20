import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      max-width: 200px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }
`;
