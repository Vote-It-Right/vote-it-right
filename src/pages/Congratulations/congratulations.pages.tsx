import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./congratulations.styles.css";

function congratulations() {
  return (
    <main id="congrats_main">
      <div className="txt">
        <p className="h1">Congratulations!</p>
        <p className="h3">
          You just <br />
          cast your vote!
        </p>

        <Link to="/">
          <Button variant="contained" color="primary">
            Done
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default congratulations;
