import React from 'react';
import './index.css'

const TodoAddBtn = ({onClick}) => {
    return (
        <div className='TodoAddBtnBox'>
            <button className='TodoAddBtn' onClick={onClick}> ADD </button>
        </div>
    );
};

export default TodoAddBtn;