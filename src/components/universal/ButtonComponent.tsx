import React from 'react';

type propsType = {
    onClick: () => void;
    text: string;
}

const ButtonComponent: React.FunctionComponent<propsType> = ({ onClick, text }) => {
    return (
            <button onClick={ onClick } className="universal-button">
                { text }
            </button>
    )
}

export default ButtonComponent;