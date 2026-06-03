import React from "react";
import HomeBanner from "./HomeBanner";
import Service from "./Service";
import UpcomingOperations from "./UpcomingOperations";
import NewToAirsoft from "./NewToAirsoft";
import TacticalMarketplace from "./TacticalMarketplace";
import FieldIntelligence from "./FieldIntelligence";
import AirsoftArenaSubscriptions from "./AirsoftArenaSubscriptions";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Service />
      <UpcomingOperations />
      <NewToAirsoft />
      <TacticalMarketplace />
      {/* <AirsoftArenaSubscriptions /> */}
      <FieldIntelligence />
      
    </>
  );
};

export default Home;
