import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button 
        // This way does not pass in the proper arguments
        //onClick={props.handleDeleteOption}
        // This way does pass in the arguments
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;