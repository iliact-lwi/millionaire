import { ACTION_GAME_EXPECTATION } from '../types';

import { actionStateType, ActionType } from '../actions';


const initialState: actionStateType = {
    expectation: false
}

const actionReducer = (state: actionStateType = initialState, action: ActionType) => {
    switch(action.type) {
        case ACTION_GAME_EXPECTATION: {
            return {...state, expectation: action.action}
        }

        default: return state;
    }
}

export default actionReducer;