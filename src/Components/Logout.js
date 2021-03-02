import React from 'react';

function Logout() {

    function handleClick() {
        sessionStorage.clear()

    }

    return (
        <div>
            <h2>Do you want to logout?</h2>
            <button onClick={handleClick}>Logout now</button>
        </div>
    );
}

export default Logout;
