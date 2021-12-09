import React, { FC } from "react";

interface Props {
  name?: string;
  entries?: number;
}

const Rank: FC<Props> = ({ name, entries }) => {
  return (
    <>
      <div className="white">
        {name && entries && (
          <p className="f4">
            {name}, your number of entries is...{" "}
            <span className="f2">{entries}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default Rank;
