import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import React from "react";
import { SubmitButton } from "../../components/SubmitButton";
import "./step3.styles.css";

function Step3() {
  return (
    <main id="verification_main">
      <div className="small_txt">
        <p className="h1">STEP - 2</p>
        <p className="h3">Enter these details to proceed to cast vote</p>
      </div>

      <Card className="big_white_box">
        <CardContent>
          <FormControl id="verification_form">
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
              <SubmitButton variant="contained" color="primary">
                <p className="white-txt">Submit</p>
              </SubmitButton>
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </div>
          </FormControl>
        </CardContent>
      </Card>
    </main>
  );
}

export default Step3;
