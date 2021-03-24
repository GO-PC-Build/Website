// import { Description, Title } from "../components/intro/Intro.styled";
// import React, { useContext, useEffect, useState } from "react";

import React from "react";
import { Title } from "../components/intro/Intro.styled";

// import { AccountContext } from "../layouts/DefaultLayout";
// import { Board } from "./reserve";
// import axios from "axios";

// interface Data {
//   workshop: number;
//   location: number | undefined;
//   board: number[];
// }

export const ReservationPage: React.FC = () => {
  // const [data, setData] = useState<Data>({
  //   workshop: 0,
  //   location: undefined,
  //   board: [],
  // });
  // const { internalnr } = useContext(AccountContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (internalnr === 0) return;
  //     const urlBase =
  //       process.env.NODE_ENV === "development"
  //         ? "http://localhost:25578"
  //         : "https://api.arthurdw.com/go-pc-build";

  //     const user = await axios.get(`${urlBase}/user/id/${internalnr}`);
  //     const schemes = await axios.get(`${urlBase}/schemes`);

  //     setData({
  //       workshop: user.data.workshop,
  //       location: user.data.location,
  //       board: schemes.data.schemes[user.data.workshop].filter(
  //         (i: number) => i !== user.data.location
  //       ),
  //     });
  //   };

  //   fetchData();
  // }, [internalnr]);

  return (
    // <React.Fragment>
    //   <Title
    //     style={{
    //       margin: "15px auto",
    //       textAlign: "center",
    //     }}
    //   >
    //     Jouw reservatie <span style={{ fontSize: "75%" }}>(groen)</span>
    //   </Title>
    //   <Description
    //     style={{
    //       margin: "15px auto",
    //       textAlign: "center",
    //     }}
    //   >
    //     {data.workshop === 0 ? "31 maart" : "21 april"}
    //   </Description>
    //   <Board
    //     data={data.board}
    //     selected={data.location}
    //     setSelected={() => {}}
    //   />
    // </React.Fragment>
    <Title>
      Door gewijzigde Corona maatregelen zijn de huidige workshop datums
      onbekend. We houden jullie op de hoogte via onze smartschool.
    </Title>
  );
};

export default ReservationPage;
