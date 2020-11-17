import config from '../../config/config.json';
import { GAME_INIT_MATCH, GAME_NEXT_MATCH, GAME_SET_PRIZE } from '../types';

import { configStateType, configMatchesType, configItemType, ActionType } from '../actions';

const current = {
    question: '',
    answers: [],
    prize: '',
    _correct: [],
    id: 0
}

const matches: configMatchesType[] = [];

const initialState: configStateType = {
    data: config,
    current,
    matches,
    currentPrize: ''
}

const configReducer = (state: configStateType = initialState, action: ActionType) => {
    switch(action.type) {
        case GAME_INIT_MATCH: {
            const current = state.data.data[0];
            const copy: configItemType[] = JSON.parse(JSON.stringify(state.data.data));

            const matches = copy.reverse().map(item => {
                const action = item.id === 1 ? 'selected' : 'inactive';

                return { ...item, action }
            });

            return { ...state, current, matches }
        }

        case GAME_NEXT_MATCH: {
            const current = state.data.data[action.id];
            const matches = state.matches.map(match => {
                switch(match.id) {
                    case action.id: return { ...match, action: 'disabled' };
                    case (action.id + 1): return { ...match, action: 'selected' };

                    default: return match;
                }
            })

            return {...state, current, matches}
        }

        case GAME_SET_PRIZE: {
            switch(action.action) {
                case 'win': {
                    return { ...state, currentPrize: state.data.data[state.current.id - 1].prize }
                }
                case 'lose': {
                    const current = state.data.data[state.current.id - 2];
                    if(!current) return { ...state, currentPrize: '$0' }
                    
                    return { ...state, currentPrize: current.prize }
                }

                default: return state;
            }
        }

        default: return state;
    }
}

export default configReducer;