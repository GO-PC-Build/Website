import {
  CardDescription,
  CardIcon,
  CardSplitter,
  CardTitle,
  CardWrapper,
  CardsWrapper,
  InnerCardWrapper,
} from "./Cards.styled";

import DiscordIcon from "../../assets/discord.png"
import QuestionMarkIcon from "../../assets/question.png";
import React from "react";
import SmartschoolIcon from "../../assets/smartschool.png";

const data = [
  {
    title: "Doe de\nquiz!",
    url: "/quiz",
    description: "Test je computer skills om te kijken op welk niveau je zit.",
    icon: QuestionMarkIcon,
  },
  {
    title: "Join onze\nDiscord",
    url: "/discord",
    description: "Hulp nodig? Join onze discord voor updates & vragen!",
    icon: DiscordIcon,
  },
  {
    title: "Verbind\nSmartschool",
    url: "/connect",
    description: "Betaal met je epay account om corona tegen te gaan!",
    icon: SmartschoolIcon,
  },
];

interface CardProps {
  title: String;
  url: string;
  description: String;
  icon: string;
  odd: boolean;
}

const Card: React.FC<CardProps> = (props) => (
  <CardWrapper to={props.url}>
    <CardIcon src={props.icon} alt="" odd={props.odd} />
    <InnerCardWrapper odd={props.odd}>
      <CardTitle odd={props.odd}>{props.title}</CardTitle>
      <CardSplitter />
      <CardDescription>{props.description}</CardDescription>
    </InnerCardWrapper>
  </CardWrapper>
);

export const Cards: React.FC = () => (
  <CardsWrapper>
    {data.map((item, index) => (
      <Card key={index} {...item} odd={index % 2 === 0} />
    ))}
  </CardsWrapper>
);
