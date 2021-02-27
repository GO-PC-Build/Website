import { Description, Title } from "../components/intro/Intro.styled";
import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-bottom: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin-top: 20px;
`;

const WorkshopButton = styled.button`
  border: none;
  border-radius: 7px;
  color: white;
  padding: 10px;
  background-color: #4a85b9;
  width: 45%;
  font-size: 1.5rem;
  margin: 10px 0;
  cursor: pointer;
  transition: opacity 0.25s ease-in-out;
  outline: none;

  &:hover {
    opacity: 0.9;
  }
`;

const BoardPanelWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;

  margin-top: 20px;

  @media (min-width: 1500px) {
    grid-template-columns: auto 325px;
  }
`;

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);

  @media (min-width: 0px) {
    grid-gap: 15px;
  }

  @media (min-width: 420px) {
    grid-gap: 20px;
  }

  @media (min-width: 470px) {
    grid-gap: 30px;
  }

  @media (min-width: 600px) {
    grid-gap: 40px;
  }

  margin: 20px auto 0 auto;
`;

const BoardTitle = styled.h3`
  width: 60%;
  border-bottom: 5px solid #0a142c;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 auto;
`;

const ReserveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReserveCodeText = styled.h4`
  font-size: 1.5rem;
`;

const ReserveCode = styled.input`
  border: 2px solid #0a142c;
  border-radius: 7px;
  font-size: 1.5rem;
  margin-top: 10px;
  padding: 3px;
`;

const SquareButton = styled.button`
  display: block;

  width: 30px;
  height: 30px;

  @media (min-width: 380px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 400px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 500px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 650px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 700px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 750px) {
    width: 90px;
    height: 90px;
  }

  border: none;
  border-radius: 7px;

  background-color: #0a142c;
  outline: none;
  cursor: pointer;

  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

const Centerer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ReservePage: React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Title>Kies je plaats</Title>
        <Description>
          Je kan hier je plaats reserver voor de workshops. <br />
          De eerste (24 maart) is voor de 2de graad en de tweede workshop (31
          maart) is voor de 1ste graad.
        </Description>
        <ButtonsWrapper>
          <WorkshopButton>Workshop 1</WorkshopButton>
          <WorkshopButton>Workshop 2</WorkshopButton>
        </ButtonsWrapper>
      </Wrapper>
      <Board />
    </React.Fragment>
  );
};

const Board: React.FC = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <BoardPanelWrapper>
      <Centerer>
        <BoardTitle>Bord</BoardTitle>
        <BoardWrapper>
          {[...Array(15)].map((_, i) => (
            <Square
              key={i}
              isReserved={i % 3 === 0}
              index={i}
              isSelected={selected === i}
              setSelected={setSelected}
            />
          ))}
        </BoardWrapper>
      </Centerer>
      <ReserveWrapper>
        <ReserveCodeText>Code</ReserveCodeText>
        <ReserveCode />
        <WorkshopButton style={{ width: "100%" }}>Reserveer nu</WorkshopButton>
      </ReserveWrapper>
    </BoardPanelWrapper>
  );
};

interface SquareProps {
  index: number;
  isReserved: boolean;
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Square: React.FC<SquareProps> = (props) => {
  const backgroundColor = props.isReserved
    ? "#FF2012"
    : props.isSelected
    ? "#05F400"
    : undefined;
  const cursor = props.isReserved ? "default" : undefined;

  const handleClick = () => {
    if (!props.isReserved) props.setSelected(props.index);
  };

  return (
    <SquareButton
      style={{ backgroundColor, cursor }}
      title={props.isReserved ? "Deze plaats is al in gebruik!" : undefined}
      onClick={handleClick}
    />
  );
};

export default ReservePage;
