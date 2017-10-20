import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc) {
    return class extends React.Component {
        render() {
            return <ComponentToWrap  data = {dataRetrievalFunc('id-' + this.props.match.params.number)} />;
        }
    }
}