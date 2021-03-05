import {
  CardDescription,
  CardIcon,
  CardSplitter,
  CardTitle,
  CardWrapper,
  CardsWrapper,
  DesignSplitter,
  InnerCardWrapper,
  InternalCardWrapper,
} from "./Cards.styled";

import DiscordIcon from "../../assets/discord.png";
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
    description: "Hulp nodig? Join onze discord voor updates & vragen.",
    icon: DiscordIcon,
  },
  {
    title: "Verbind\nSmartschool",
    url: "/reserveer",
    description: "Reserveer gemakkenlijk je plek coronaproof online.",
    icon: SmartschoolIcon,
    internal: true,
  },
];

interface CardProps {
  title: String;
  url: string;
  description: String;
  icon: string;
  odd: boolean;
  internal: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const content = (
    <>
      <CardIcon src={props.icon} alt="" odd={props.odd} />
      <InnerCardWrapper odd={props.odd}>
        <CardTitle odd={props.odd}>{props.title}</CardTitle>
        <CardSplitter />
        <CardDescription>{props.description}</CardDescription>
      </InnerCardWrapper>
    </>
  );

  return (
    <div>
      {!props.odd && <DesignSplitter />}
      {props.internal ? (
        <InternalCardWrapper to={props.url}>{content}</InternalCardWrapper>
      ) : (
        <CardWrapper href={props.url} target="_blanc">{content}</CardWrapper>
      )}
    </div>
  );
};

export const Cards: React.FC = () => (
  <CardsWrapper>
    {data.map((item, index) => (
      <Card
        key={index}
        {...item}
        odd={index % 2 === 0}
        internal={!!item.internal}
      />
    ))}
  </CardsWrapper>
);
