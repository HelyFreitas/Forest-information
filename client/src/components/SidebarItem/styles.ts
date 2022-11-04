import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: #2a3447;
  color: white;

  font-size: 20px;

  padding: 10px;
  margin: 0 15px 20px;

  cursor: pointer;

  border-radius: 10px;
  
  transition: .4s ease-in-out;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;

    transition: .4s ease-in-out;
  }
`;
