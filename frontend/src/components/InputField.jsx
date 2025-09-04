import React from "react";

const InputField = ({name, type, id}) => {
    return(
        <form onSubmit={ValidateSubmit}>
        <label htmlFor={name}>{name}:</label>
        <label type={type} id={id} value =""></label>
    </form>
    );
};

 export default InputField; 