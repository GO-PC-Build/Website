import styled from "styled-components";

export const WindowWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CookieNotifierWrapper = styled.section`
  background-color: #fff;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  height: fit-content;
`;

export const CookieNotifierTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 5px 0 15px 0;
`;

export const CookieNotifierSubTitle = styled.h4`
  font-size: 1.3rem;
  margin: 10px 0 3px 0;
`;

export const CookieNotifierDescription = styled.p`
  text-align: center;
`;

export const CookieNotifierList = styled.ul`
  margin: 5px 0 10px 10px;
`;

export const CookieNotifierAcceptWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 5px 0;
`;

export const CookieNotifierAccept = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 7px;
  background-color: #4a85b9;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;

  transition: all 0.25s ease-in-out;
  outline: none;

  &:hover {
    opacity: 0.9;
  }
`;
