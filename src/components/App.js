import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './AppChildren/Header'
import Main from './AppChildren/Main'


// this component will be rendered by our <BrowserRouter>
const App = (props) =>  {

    return (
        <div>
            <Header />
            <Main {...props} />
        </div>
    )
}

export default App;