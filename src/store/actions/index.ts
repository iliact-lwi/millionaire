import { GAME_INIT_MATCH, ACTION_GAME_EXPECTATION, GAME_NEXT_MATCH, GAME_SET_PRIZE } from '../types';

export type rootStateType = {
    config: configStateType;
    action: actionStateType;
}

type configAnswerType = {
    answer: string;
    truth: boolean;
    id: number;
}

export type configItemType = {
    question: string;
    answers: configAnswerType[];
    prize: string;
    _correct: string[];
    id: number;
}

type configDataType = {
    type: string;
    game: string;
    ok: number;
    data: configItemType[];
}

export type configMatchesType = {
    prize: string;
    id: number;
    action: string;
    question: string;
    answers: configAnswerType[];
    _correct: string[];
}

export type configStateType = {
    data: configDataType;
    current: configItemType;
    matches: configMatchesType[];
    currentPrize: string;
}

export type actionStateType = {
    expectation: boolean;
}

type gameInitMatchActionType = {
    type: typeof GAME_INIT_MATCH;
}

type gameNextMatchActionType = {
    type: typeof GAME_NEXT_MATCH;
    id: number;
}

type gameSetPrizeActionType = {
    type: typeof GAME_SET_PRIZE;
    action: string;
}

type actionGameExpectationActionType = {
    type: typeof ACTION_GAME_EXPECTATION;
    action: boolean;
}

export const gameInitMatch = (): gameInitMatchActionType => {
    return {
        type: GAME_INIT_MATCH
    }
}

export const gameNextMatch = (id: number): gameNextMatchActionType => {
    return {
        type: GAME_NEXT_MATCH,
        id
    }
}

export const gameSetPrize = (action: string): gameSetPrizeActionType => {
    return {
        type: GAME_SET_PRIZE,
        action
    }
}

export const actionGameExpectation = (action: boolean): actionGameExpectationActionType => {
    return {
        type: ACTION_GAME_EXPECTATION,
        action
    }
}


export type ActionType = gameInitMatchActionType | actionGameExpectationActionType | gameNextMatchActionType | gameSetPrizeActionType;