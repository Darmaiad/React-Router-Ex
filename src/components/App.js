import React from 'react';
import Header from './AppChildren/Header'
import Main from './AppChildren/Main'


const App = (props) =>  {

    return (
        <div>
            <Header />
            <Main {...props} />
        </div>
    )
}

export default App;