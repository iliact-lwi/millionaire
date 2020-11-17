import React from 'react';

import { useSelector } from 'react-redux';

import { rootStateType } from '../../../store/actions';

const QuestionComponent: React.FunctionComponent = () => {
    const question = useSelector((state: rootStateType) => state.config.current.question);

    return (
        <div className="question">
            { question }
        </div>
    )
}

export default QuestionComponent;