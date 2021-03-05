import styled from "styled-components";

export const CovidWrapper = styled.section<{ active: boolean }>`
  position: fixed;
  z-index: 11;

  transition: left 0.256s ease-in-out;

  top: 140px;
  right: 0;
  left: ${(props) => (props.active ? "30px" : "calc(100vw - 35px)")};

  padding: 14px 7px;

  background-color: #ca6862;
  color: #fff;

  font-family: "Roboto", sans-serif;

  border-radius: 7px 0 0 7px;

  display: grid;
  grid-template-areas: "sidebar splitter content";
  grid-gap: 5px;

  align-items: center;

  cursor: pointer;

  @media (min-width: 1024px) {
    left: ${(props) => (props.active ? "70vw" : "calc(100vw - 45px)")};
    max-width: 30vw;
  }
`;

export const CovidPeekWrapper = styled.div`
  grid-area: sidebar;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 15px;
`;

export const CovidIcon = styled.img`
  width: 24px;
  height: 24px;
  user-select: none;
  margin: 0 auto;
`;

export const CovidText = styled.h2`
  text-align: center;
  font-size: 20px;
  line-height: 30px;

  display: block;
  white-space: pre-wrap;

  user-select: none;
`;

export const CovidMessage = styled.p`
  display: block;

  grid-area: content;
  display: block;
  overflow: hidden;
  width: calc(100vw - 47px - 27px);

  cursor: text;

  @media (min-width: 1024px) {
    width: calc(100vw - 47px - 27px - 317px);
    max-width: calc(30vw - 17px - 27px - 47px);
  }
`;

export const CovidSplitter = styled.div`
  grid-area: splitter;
  background-color: #4a85b9;
  width: 3px;
  height: 100%;
  border-radius: 3px;
`;
