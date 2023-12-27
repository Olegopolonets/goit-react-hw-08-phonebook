import styled from 'styled-components';

export const ItemContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  font-size: 20px;
`;

export const BtnDelete = styled.button`
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background-color: aliceblue;
  border-radius: 5px;
  border: 1px solid azure;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  margin: 0;
  outline-color: bisque;
  transition: all 0.5s ease;

  &:hover {
    background-color: tomato;
  }
`;
