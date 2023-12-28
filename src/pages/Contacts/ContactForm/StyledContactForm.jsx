import styled from 'styled-components';

export const InputAddContact = styled.input`
  width: 80%;
  height: 30px;
  background-color: aliceblue;
  border-radius: 20px;
  border-color: transparent;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  outline-color: bisque;
`;

export const BtnAddContact = styled.button`
  padding: 10px;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background-color: aliceblue;
  border-radius: 20px;
  border: 1px solid azure;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(255, 228, 196, 0.9);
    border: none;
    transform: scale(1.5);
  }
`;
