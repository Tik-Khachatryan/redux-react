import React from 'react';

const Counter = (props) => {
    console.log(props);
    const plus  = () => {
        props.props.plusDispatch();
    };
    const minus = () => {
        props.props.minusDispatch();
    };

    return (
        <div>
            <button onClick={plus}>+</button>
            <span>{props.props.count}</span>
            <button onClick={minus}>-</button>
        </div>
    )
};

export default Counter