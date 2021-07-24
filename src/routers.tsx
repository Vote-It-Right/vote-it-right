import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import congratulations from "./pages/Congratulations/congratulations.pages";
import ErrorPage from "./pages/ErrorPage/error.pages";
import Step1 from "./pages/Step1/step1.pages";
import Step2 from "./pages/Step2/step2.pages";
import Step3 from "./pages/Step3/step3.pages";
import WelcomePage from "./pages/WelcomePage/welcome.pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WelcomePage} exact />
        <Route path="/validation" component={Step1} exact />
        <Route path="/verification" component={Step2} exact />
        <Route path="/vote" component={Step3} exact />
        <Route path="/congrats" component={congratulations} exact />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
