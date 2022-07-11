import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Inquiry() {
  return (
    <div className="">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
        />
      </Box>
    </div>
  );
}
