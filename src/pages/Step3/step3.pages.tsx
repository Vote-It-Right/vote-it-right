import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/SubmitButton";
import { party } from "../../utils/parties";
import "./step3.styles.css";

function Step3() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (value != "") {
      const otherDivs = document.querySelectorAll(".box");

      otherDivs.forEach((d, idx) => {
        if (idx + 1 != party.get(value)) {
          d.classList.remove("selected");
          d.classList.add("default");
        }
      });

      const div = document.getElementById(party.get(value)!.toString());
      div!.classList.remove("default");
      div!.classList.add("selected");
    }
  }, [value]);

  return (
    <main id="verification_main">
      <div className="small_txt">
        <p className="h1">STEP - 3</p>
        <p className="h3">Cast your Vote!</p>
      </div>

      <Card className="big_white_box">
        <CardContent>
          <FormControl id="verification_form">
            <div className="padding-10">
              <RadioGroup
                aria-label="vote"
                name="vote"
                value={value}
                onChange={handleChange}
              >
                <div className="flexbox">
                  <div id="1" className="box default"></div>
                  <FormControlLabel
                    className="radiolabel"
                    value="facemook"
                    control={<Radio className="radio" />}
                    label="Face Mook"
                    labelPlacement="start"
                  />
                </div>

                <div className="flexbox">
                  <div id="2" className="box default"></div>
                  <FormControlLabel
                    className="radiolabel"
                    value="twitcher"
                    control={<Radio className="radio" />}
                    label="Twitcher"
                    labelPlacement="start"
                  />
                </div>

                <div className="flexbox">
                  <div id="3" className="box default"></div>
                  <FormControlLabel
                    className="radiolabel"
                    value="intergram"
                    control={<Radio className="radio" />}
                    label="Intergram"
                    labelPlacement="start"
                  />
                </div>

                <div className="flexbox">
                  <div id="4" className="box default"></div>
                  <FormControlLabel
                    className="radiolabel"
                    value="whytube"
                    control={<Radio className="radio" />}
                    label="Whytube"
                    labelPlacement="start"
                  />
                </div>
              </RadioGroup>
            </div>

            <Link to="/congrats">
              <SubmitButton variant="contained" color="primary">
                <p className="white-txt">Cast Vote</p>
              </SubmitButton>
            </Link>
          </FormControl>
        </CardContent>
      </Card>
    </main>
  );
}

export default Step3;
