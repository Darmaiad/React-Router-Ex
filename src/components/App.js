import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './AppChildren/Header'
import Main from './AppChildren/Main'
import { BrowserRouter } from 'react-router-dom';


// this component will be rendered by our <BrowserRouter>
const App = (props) =>  {
    return (
        <div>
            {/* <Header /> */}
            <BrowserRouter>
            
            <Main {...props} />
            </BrowserRouter>
        </div>
    )
}

export default App;