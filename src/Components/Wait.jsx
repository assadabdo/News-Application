import React from "react";

import { Puff } from "react-loader-spinner";

export const Wait = () => {
  return (
    <div className="flex justify-center items-center ">
      <Puff type="Puff" color="white" height={550} width={100} />
    </div>
  );
};
