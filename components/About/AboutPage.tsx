import React from "react";
import Banner from "./Banner";
import MeetOurTeam from "./MeetOurTeam";
import Unrestricted from "./Unrestricted";

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <>
      <Banner />
      <Unrestricted />
      <MeetOurTeam />
    </>
  );
};
export default AboutPage;
