import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { rootStateType, actionGameExpectation, gameNextMatch, gameSetPrize } from '../../../store/actions';

import AnswerComponent from './answer';

const AnswersComponent: React.FunctionComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const expectation = useSelector((state: rootStateType) => state.action.expectation);
    const matches = useSelector((state: rootStateType) => state.config.matches);
    const current = useSelector((state: rootStateType) => state.config.current);
    const [action, setAction] = useState({action: 'inactive', id: 0});
    

    const selectAnswerHandler = (event: any) => {
        if(!expectation) {
            const target = event.target;
            const element = target.closest('div[data-answer]');
    
            if(element) {
                dispatch(actionGameExpectation(true));

                const id = Number(element.dataset.id);
                const answer = element.dataset.answer;

                setAction({action: 'selected', id});

                setTimeout(() => {
                    if(current._correct[0] === answer) {
                        setAction({action: 'correct', id});

                        setTimeout(() => {
                            if(current.id < matches.length) {
                                setAction({action: 'inactive', id});
                                dispatch(gameNextMatch(current.id));
                            } else if (current.id === matches.length) {
                                dispatch(gameSetPrize('win'));
                                history.push('/gameover');
                            }

                            dispatch(actionGameExpectation(false));
                        }, 700);
                    }
                    else {
                        setAction({action: 'wrong', id});

                        setTimeout(() => {
                            dispatch(gameSetPrize('lose'));
                            history.push('/gameover');
                            dispatch(actionGameExpectation(false));
                        }, 700);
                    }
                }, 1000);
            }
        }
    }

    return (
        <div onClick={ selectAnswerHandler } className="answers">
            {
                current.answers.map(answer => {
                    return (
                        <AnswerComponent key={ answer.id } answer={ answer.answer } id={ answer.id } action={ action } />
                    )
                })
            }
        </div>
    )
}

export default AnswersComponent;