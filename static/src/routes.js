import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Text from "./pages/text/text";


function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Text} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;