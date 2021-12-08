import React, { FC } from "react";

interface Props {
  name?: string;
  entries?: number;
}

const Rank: FC<Props> = ({ name, entries }) => {
  return (
    <>
      <div className="white f4">
        {name && `${name}, your number of entries is...`}
      </div>
      <div className="white f2">{entries && `${entries}`}</div>
    </>
  );
};

export default Rank;
