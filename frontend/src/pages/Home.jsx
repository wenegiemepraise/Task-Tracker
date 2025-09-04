import React from 'react';
import Button from "./Button";
const Home = () => {
    return (
        <div>
            <div>
                <h1>Welcome to your Task Tracker</h1>
                <div className="space-x-4">
                    <Button label="Sign Up" to="/signup" />
                    <Button label="Login" to="/login" />
                </div>
            </div>
        </div>
    );
};
export default Home;