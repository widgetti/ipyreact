import { Button } from "@mui/material";
import confetti from "canvas-confetti";

import * as React from "react";
export default function ({ value, on_value, debug }) {
  if (debug) {
    console.log("value=", value, on_value);
  }
  return (
    <Button
      variant="contained"
      onClick={() => confetti() && on_value(value + 1)}
    >
      {value || 0} times confetti
    </Button>
  );
}
