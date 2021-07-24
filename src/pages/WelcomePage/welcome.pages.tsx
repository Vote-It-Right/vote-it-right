import React from "react";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/SubmitButton";
import "./welcome.styles.css";

function WelcomePage() {
  return (
    <main id="welcome_main">
      <div className="txt">
        <p className="h1">Welcome!</p>
        <p className="h3">
          Ready for your <br />
          Big Day?
        </p>

        <Link to="validation">
          <SubmitButton variant="contained" color="primary">
            <p className="white-txt">Cast Vote</p>
          </SubmitButton>
        </Link>
      </div>

      <div className="cover" id="welcome_img">
        <div className="bg"></div>
      </div>
    </main>
  );
}

export default WelcomePage;
