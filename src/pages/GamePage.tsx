import React, { useEffect, useState } from 'react';

import {useDispatch, useSelector } from 'react-redux';

import MenuIconComponent from '../components/game/menu';
import QuestionComponent from '../components/game/question';
import AnswersComponent from '../components/game/answers';
import MenuComponent from '../components/game/menu/menu';

import { gameInitMatch, rootStateType } from '../store/actions';

const GamePage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const [isMobile, setIsMobile] = useState(false);
    const expectation = useSelector((state: rootStateType) => state.action.expectation);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        dispatch(gameInitMatch());

        if(window.innerWidth >= 1440) setIsMobile(false);
        else if(window.innerWidth < 1440) setIsMobile(true);

        const resizeHandler = (event: any) => {
            const target = event.target;

            if(target.innerWidth >= 1440) setIsMobile(false);
            else if(target.innerWidth < 1440) setIsMobile(true);
        }

        window.addEventListener('resize', resizeHandler);

        return function cleanup() {
            window.removeEventListener('resize', resizeHandler);    
        };
        
    }, [dispatch]);

    const showMenuHandler = () => {
        if(!expectation) {
            setShowMenu(true);
        }
    }

    const closeMenuHandler = () => {
        setShowMenu(false);
    }

    if(isMobile) {
        return (
            <main className="game">
                {
                    showMenu ? <MenuComponent onClick={ closeMenuHandler } mobile={ isMobile } /> :  
                        <>
                            <MenuIconComponent onClick={ showMenuHandler } />
                            <QuestionComponent />
                            <AnswersComponent />
                        </>
                }
            </main>
        )
    }

    return (
        <main className="game">
            <div className="question-answers">
                <QuestionComponent />
                <AnswersComponent />    
            </div>
            <MenuComponent onClick={ closeMenuHandler } mobile={ isMobile } />
        </main>
    )
}

export default GamePage;