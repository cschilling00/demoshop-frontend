import React from 'react';

function Logout() {

    function handleClick() {
        sessionStorage.clear()

    }

    return (
        <div>
            <h2>Do you want to logout?</h2>
            <button className='btn'  onClick={handleClick}>Logout now</button>
        </div>
    );
}

export default Logout;
