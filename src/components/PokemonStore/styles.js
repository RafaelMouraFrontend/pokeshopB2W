import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 7px 7px;
  padding: 10px;
  @media (max-width: 882px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 658px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 10px;

  button {
    padding: 4px 7px;
    background: #3759a7;
    border: 0;
    color: #fff;
    margin-top: 10px;
  }
  img {
    max-width: 100%;
  }
`;
