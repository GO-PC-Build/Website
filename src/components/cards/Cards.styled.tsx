import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsWrapper = styled.section`
  position: relative;

  width: 80%;
  margin: 60px auto 0 auto;

  display: grid;
  grid-gap: 40px;
  grid-template-rows: repeat(3, 1fr);
`;

export const CardWrapper = styled(Link)`
  position: relative;
  display: block;

  text-decoration: none;
  color: #fff;

  height: 300px;
`;

export const CardIcon = styled.img<{odd: boolean}>`
  position: absolute;
  ${(props) => props.odd ? 'right: 0;' : 'left: 0;'}
  z-index: 4;

  width: 115px;
  height: 115px;

  user-select: none;
`;

export const InnerCardWrapper = styled.div<{odd: boolean}>`
  position: absolute;
  z-index: 3;
  ${(props) => props.odd ? 'left: 0;' : 'right: 0;'}

  background-color: #0a142c;
  border-radius: 7px;

  display: grid;
  grid-gap: 10px;

  top: calc(115px / 2);
  width: calc(100% - 20px - ((115px / 3) * 2));
  min-width: 205px;
  padding: 10px;
  height: 223px;
`;

export const CardTitle = styled.h3<{odd: boolean}>`
  font-size: 36px;
  white-space: pre-wrap;
  line-height: 40px;
  text-align: ${(props) => props.odd ? 'left' : 'right'}
`;

export const CardSplitter = styled.div`
  background-color: #4a85b9;
  border-radius: 3px;
  height: 3px;
  width: 100%; ;
`;

export const CardDescription = styled.p`
  font-size: 24px;
  line-height: 30px;
`;
