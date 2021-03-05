import {
  CookieNotifierAccept,
  CookieNotifierAcceptWrapper,
  CookieNotifierDescription,
  CookieNotifierList,
  CookieNotifierSubTitle,
  CookieNotifierTitle,
  CookieNotifierWrapper,
  WindowWrapper,
} from "./CookieNotifier.styled";
import React, { useState } from "react";

import { getCookie } from "../../layouts/DefaultLayout";

export const CookieNotifier: React.FC = () => {
  const [acceptedCookie, setAcceptedCookie] = useState<boolean>(
    getCookie("accepted_cookies") === "true"
  );

  const acceptCookies = () => {
    const date = new Date();
    date.setDate(date.getDate() + 365);
    // prettier-ignore
    document.cookie = `accepted_cookies=true; expires=${date.toUTCString()};`;
    setAcceptedCookie(true);
  };

  return acceptedCookie ? (
    <></>
  ) : (
    <WindowWrapper>
      <CookieNotifierWrapper>
        <CookieNotifierTitle>Cookies</CookieNotifierTitle>
        <CookieNotifierDescription>
          Wij gebruiken cookies om jouw ervaring te optimalizeren. <br />
          We traceren en verkopen jouw cookies niet.
        </CookieNotifierDescription>
        <CookieNotifierSubTitle>Wat slaan we op?</CookieNotifierSubTitle>
        <CookieNotifierList>
          <li>✔️ Jouw GO-AO login cookie</li>
          <li>✔️ Of je dit hebt geaccepteerd</li>
          <li>❌ Cookies van andere websites</li>
        </CookieNotifierList>
        <CookieNotifierDescription>
          Wij respecteren de GDPR-wetgeving van Vlajo en het GO! atheneum
          Oudenaarde.
        </CookieNotifierDescription>
        <CookieNotifierAcceptWrapper>
          <CookieNotifierAccept onClick={acceptCookies}>
            Accepteren en doorgaan
          </CookieNotifierAccept>
        </CookieNotifierAcceptWrapper>
      </CookieNotifierWrapper>
    </WindowWrapper>
  );
};
