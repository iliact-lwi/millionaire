import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartGamePage from './pages/StartGamePage';
import GameOverPage from './pages/GameOverPage';
import GamePage from './pages/GamePage';

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                    <Route component={ StartGamePage } path="/" exact />
                    <Route component={ GameOverPage } path="/gameover" />
                    <Route component={ GamePage } path="/game" />
            </Switch>
        </Router>
    )
}

export default App;