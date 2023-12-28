import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  font-size: 22px;
  gap: 10px;
`;

export const MessageNotContacts = styled.p`
  font-size: 21px;
  font-style: italic;
  text-align: center;
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 10;
`;
