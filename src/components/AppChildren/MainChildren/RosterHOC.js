import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc) {
    return class extends React.Component {
        render() {
            let dataParam = null;
            if (this.props.match != null) {
                dataParam = 'id-' + this.props.match.params.number
            }
            return (
                <ComponentToWrap  data = {dataRetrievalFunc(dataParam)} {...this.props} />
            );
        }
    }
}