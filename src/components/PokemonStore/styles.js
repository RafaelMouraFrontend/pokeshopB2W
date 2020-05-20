import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 7px 7px;
  padding: 10px;
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
`;
