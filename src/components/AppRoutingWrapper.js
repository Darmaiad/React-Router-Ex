import React from 'react';
import App from './../components/App';
import { BrowserRouter } from 'react-router-dom';

const AppRoutingWrapper = (props) =>  {

    return (
        <div>
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>
        </div>
    )
}

export default AppRoutingWrapper;