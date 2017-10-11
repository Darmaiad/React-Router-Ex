import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header'
import Main from './Main'


// this component will be rendered by our <BrowserRouter>
const App = () =>  {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default App;