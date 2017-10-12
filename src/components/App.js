import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './AppChildren/Header'
import Main from './AppChildren/Main'


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