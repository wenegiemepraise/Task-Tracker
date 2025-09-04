import React from 'react';
import { Link } from "react-router-dom";

const Button = ({label, to, onClick, className="", ...props}) =>{
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors duration-200";

    if (to) {
        return (
            <Link to={to}
                className={`${baseStyles} bg-blue-600 text-white hover:bg-blue-700 ${className}`}
                {...props}
                >
                {label}
            </Link>

        );
    }
 
    return (
        <button
        onClick={onClick}
        className={`${baseStyles} bg-green-600 text-white hover:bg-green-700 ${className}`}
        {...props}
        >
            {label}
        </button>
  );
};
export default Button;