import { Typography } from "@mui/material";
import React from "react";

// div>{getFlagEmoji(props.country)}</div</>

export const Flag = (props) => {
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };
  return <p>{getFlagEmoji(props.country)}</p>;
};
