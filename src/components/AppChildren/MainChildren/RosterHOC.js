import React from 'react';
import PlayerAPI from '../../../data/PlayerApi';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc)
{
    return class extends React.Component 
    {
        constructor(props) 
        {
            super(props);
            this.state = {
                data: dataRetrievalFunc(parseInt(this.props.match.params.number, 10))
            }
        };

        render() 
        {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <ComponentToWrap data={this.state.data}   />;
        }
    }
}
