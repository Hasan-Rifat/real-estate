import React from "react";
import PropertiesContent from "./PropertiesContent";

type PropertiesPageProps = {};

import PropertiesTitle from "./PropertiesTitle";

const PropertiesPage: React.FC<PropertiesPageProps> = () => {
  return (
    <section className="">
      <div>
        <PropertiesTitle />
        <PropertiesContent />
      </div>
    </section>
  );
};
export default PropertiesPage;
