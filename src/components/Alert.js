import React from 'react';

function Alert(props) {
    // Capitalize the first letter of the word
    const capitalize = (word) => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    // Determine alert color dynamically based on modes
    const dynamicAlert =
        props.modeBlue === 'dark'
            ? 'primary'
            : props.modeGreen === 'dark'
            ? 'success'
            : 'primary';

    return (
        props.alert && (
            <div className={`alert alert-${dynamicAlert}`} role="alert">
                <b>
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </b>
            </div>
        )
    );
}

export default Alert;
