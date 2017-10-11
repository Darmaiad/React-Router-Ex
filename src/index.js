import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

// class App extends React.Component 
// {
//   render() 
//   {
//     return (
//       <div>
//         <p> Env init</p>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
  );