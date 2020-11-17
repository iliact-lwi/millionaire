import React from 'react';

import GreetingComponent from '../components/startgame/greeting';

const StartGamePage: React.FunctionComponent = () => {
    return (
        <main className="startgame">
            <GreetingComponent />
        </main>
    )
}

export default StartGamePage;