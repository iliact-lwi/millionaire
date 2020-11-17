import React from 'react';

type propsType = {
    prize: string;
    action: string;
}

const PrizeComponent: React.FunctionComponent<propsType> = ({ prize, action }) => {
    return (
        <div className="prize">
            <div className={ ["main", action].join(' ') } >
                <svg className="prize-svg" width="240" height="32" viewBox="0 0 240 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z" />
                </svg>
                <div className="left-vector">
                    <svg width="41" height="2" viewBox="0 0 41 2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 1H0" />
                    </svg>
                </div>
                <div className="right-vector">
                    <svg width="41" height="2" viewBox="0 0 41 2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 1H0" />
                    </svg>
                </div>
                <div className="text">{ prize }</div>
            </div>
        </div>
    )
}

export default PrizeComponent;