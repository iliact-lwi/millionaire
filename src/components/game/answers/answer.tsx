import React from 'react';

type actionType = {
    action: string;
    id: number;
}

type propsType = {
    answer: string;
    id: number;
    action: actionType
}

const AnswerComponent: React.FunctionComponent<propsType> = ({ answer, id, action}) => {
    const letterSwitch = (id: number) => {
        switch(id) {
            case 1: return 'A';
            case 2: return 'B';
            case 3: return 'C';
            case 4: return 'D';

            default: return String(id);
        }
    }

    const actionSwitch = (action: actionType) => {
        switch(action.id) {
            case 0: return 'inactive';
            case id: return action.action;

            default: return 'inactive';
        }
    }

    return (
        <div className="answer">
            <div className={ ["main", actionSwitch(action)].join(' ') } data-answer={ answer } data-id={ id }>
                <svg className="answer-svg" width="288" height="56" viewBox="0 0 288 56" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z" />
                </svg> 
                <div className="left-vector">
                    <svg width="17" height="2" viewBox="0 0 17 2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L17 1" />
                    </svg>
                </div>
                <div className="right-vector">
                    <svg width="17" height="2" viewBox="0 0 17 2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L17 1" />
                    </svg>
                </div>
                <div className="text">
                    <div className="answer-letter">{ letterSwitch(id) }</div>
                    <div>{ answer }</div>
                </div>
            </div>
        </div>
    )
}

export default AnswerComponent;