import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from "./pages/welcome/welcome";
import Text from "./pages/text/text";
import Speech from "./pages/speech/speech";


function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Welcome} />
                <Route path = "/text" exact component = {Text} />
                <Route path = "/speech" exact component = {Speech} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;