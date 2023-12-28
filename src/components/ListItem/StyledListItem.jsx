import styled from 'styled-components';

export const ItemContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  font-size: 20px;
  margin: 10px auto;
`;

export const BtnDelete = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  border-radius: 5px;
  border: 1px solid azure;
  cursor: pointer;
  outline-color: bisque;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    transform: scale(1.5);
  }
`;
