import { Description, Title } from "../components/intro/Intro.styled";
import React, { useContext, useEffect, useState } from "react";

import { AccountContext } from "../layouts/DefaultLayout";
import axios from "axios";
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
  max-width: 80vw;
`;

const ReserveCodeText = styled.h4`
  font-size: 1.5rem;
`;

const ReserveCodeNote = styled.span`
  font-size: 1.1rem;
  color: #ff2012;
  margin-left: 5px;
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

  @media (min-width: 350px) {
    width: 35px;
    height: 35px;
  }

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
  const [data, setData] = useState<number[][]>([[], []]);

  useEffect(() => {
    const fetchData = async () => {
      setData([[3], [1]]);
    };

    fetchData();
  }, []);

  return <ReservePageContent data={data} />;
};

const ReservePageContent: React.FC<{ data: number[][] }> = (props) => {
  const [workshop, setWorkshop] = useState<number>(0);
  const [selected, setSelected] = useState<number>();

  if (selected && props.data[workshop].includes(selected))
    setSelected(undefined);

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
          <WorkshopButton onClick={() => setWorkshop(0)}>
            Workshop 1
          </WorkshopButton>
          <WorkshopButton onClick={() => setWorkshop(1)}>
            Workshop 2
          </WorkshopButton>
        </ButtonsWrapper>
      </Wrapper>
      <Board
        data={props.data[workshop]}
        selected={selected}
        setSelected={setSelected}
        workshop={workshop}
      />
    </React.Fragment>
  );
};

const notes = {
  noLocation: "Je hebt nog geen locatie geselecteerd!",
  noCode: "Je hebt nog geen code ingegeven!",
  invalidCode: "Code is ongeldig of is al gebruikt!",
};

interface BoardProps {
  data: number[];
  selected: number | undefined;
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
  workshop: number;
}

const Board: React.FC<BoardProps> = (props) => {
  const [code, setCode] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const { internalnr } = useContext(AccountContext);

  if (
    (note === notes.noLocation && props.selected) ||
    (note === notes.noCode && code)
  )
    setNote("");

  const handleSubmit = () => {
    if (props.selected === undefined) setNote(notes.noLocation);
    else if (!code) setNote(notes.noCode);
    else {
      console.log(props.selected, code);

      const sendRequest = async () => {
        const urlBase =
          process.env.NODE_ENV === "development"
            ? "http://localhost:25578"
            : "https://api.arthurdw.com/go-pc-build";
        console.log(internalnr);
        try {
          const req = await axios.post(urlBase + "/reserve", {
            user_id: internalnr,
            workshop: props.workshop,
            location: props.selected,
            code: parseInt(code),
          });

          if (req.data?.success) {
            setNote("");
            // success
          } else throw Error();
        } catch (e) {
          setNote(notes.invalidCode);
        }
      };

      sendRequest();
    }
  };

  return (
    <BoardPanelWrapper>
      <Centerer>
        <BoardTitle>Voorkant lokaal</BoardTitle>
        <BoardWrapper>
          {[...Array(15)].map((_, i) => (
            <Square
              key={i}
              isReserved={props.data.includes(i)}
              index={i}
              isSelected={props.selected === i}
              setSelected={props.setSelected}
            />
          ))}
        </BoardWrapper>
      </Centerer>
      <ReserveWrapper>
        <ReserveCodeText>
          Code{note && <ReserveCodeNote>*{note}</ReserveCodeNote>}
        </ReserveCodeText>
        <ReserveCode
          type="number"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />
        <WorkshopButton style={{ width: "100%" }} onClick={handleSubmit}>
          Reserveer nu
        </WorkshopButton>
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
