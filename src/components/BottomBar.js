import React from "react";
import Typography from "@material-ui/core/Typography";

const BottomBar = () => {
  return (
    <div
      style={{
        height: "8vh",
        backgroundColor: "#00A7F7",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        display: "flex",
      }}
    >
      <div>
        <Typography variant="subtitle2" color="secondary">
          © Jiale Tom Tian
        </Typography>
      </div>
    </div>
  );
};

export default BottomBar;
