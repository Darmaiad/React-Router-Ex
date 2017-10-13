import React from 'react';

import PlayerAPI from '../../../data/PlayerApi';


import FullRosterContainer from './RosterChildren/FullRosterContainer';
import PlayerContainer from './RosterChildren/PlayerContainer';

function RosterHOC(ComponentToWrap, dataToRetrieve)
{
    return class extends React.Component 
    {
        constructor(props) 
        {
            super(props);
            this.state = {
                data: dataToRetrieve(PlayerAPI, props)
            }
        };

        render() 
        {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <ComponentToWrap data={this.state.data}  />;
        }
    }
}

export default RosterHOC;

