import React from 'react';

import ScoreComponent from '../components/gameover/score';

const GameOverPage: React.FunctionComponent = () => {
    return (
        <main className="gameover">
            <ScoreComponent />
        </main>
    )
}

export default GameOverPage;