import React from "react";
import { green } from "@material-ui/core/colors";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Theme,
  withStyles,
} from "@material-ui/core";

import "./step1.styles.css";
import { Link } from "react-router-dom";

function Step1() {
  const SubmitButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
  }))(Button);

  return (
    <main id="validation_main">
      <div className="small_txt">
        <p className="h1">STEP - 1</p>
        <p className="h3">Enter your details for Validation</p>
      </div>

      <Card className="big_white_box">
        <CardContent>
          <FormControl id="validation_form">
            <TextField
              label="Voter ID"
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Adhaar Card"
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControlLabel
              label="I hereby confirm that the above details provided are true to my
            knowledge"
              control={<Checkbox />}
            />

            <div className="btns">
              <Link to="/verification">
                <SubmitButton variant="contained" color="primary">
                  <p className="white-txt">Submit</p>
                </SubmitButton>
              </Link>
              <Link to="/">
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

export default Step1;
