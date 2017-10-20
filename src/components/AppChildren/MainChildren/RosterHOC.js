import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc, passedProps) {
    return class extends React.Component {
        // We call the data retrieval function passed, with an optional parameter that is the player id
        // We pass the actions to the Roster component via passedProps
        // this.props passes the router props
        render() {
            return (
                <ComponentToWrap  data = {dataRetrievalFunc(this.props.match.params.number)} {...this.props} {...passedProps} />
            );
        }
    }
}