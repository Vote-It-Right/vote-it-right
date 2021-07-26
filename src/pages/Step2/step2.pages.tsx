import React from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { SubmitButton } from "../../components/SubmitButton";

import "./step2.styles.css";
import { Link } from "react-router-dom";

function Step2() {
  return (
    <main id="verification_main">
      <div className="small_txt">
        <p className="h1">STEP - 2</p>
        <p className="h3">Enter these details to proceed to cast vote</p>
      </div>

      <Card className="big_white_box">
        <CardContent>
          <FormControl id="validation_form">
            <TextField
              label="PAN card"
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Full name"
              type="text"
              placeholder="ex. Jhon Doe"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Postal Code"
              type="text"
              placeholder="ex. 560038"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControlLabel
              label="All ready!, Proceed to vote"
              control={<Checkbox />}
            />

            <div className="btns">
              <Link to="/vote">
                <SubmitButton variant="contained" color="primary">
                  <p className="white-txt">Submit</p>
                </SubmitButton>
              </Link>
              <Link to="/validation">
                <Button variant="outlined" color="secondary">
                  Back
                </Button>
              </Link>
            </div>
          </FormControl>
        </CardContent>
      </Card>
    </main>
  );
}

export default Step2;
