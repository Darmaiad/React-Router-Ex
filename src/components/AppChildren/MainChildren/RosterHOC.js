import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc)
{
    return class extends React.Component 
    {
        render() 
        {
            return <ComponentToWrap data = { dataRetrievalFunc(parseInt(this.props.match.params.number, 10)) } />;
        }
    }
}
