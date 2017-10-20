import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc, passedProps) {
    return class extends React.Component {
        render() {
            // Check if we want a parameter for the data selection (Player component)
            let dataParam = null;
            if (this.props.match != null) {
                dataParam = 'id-' + this.props.match.params.number
            }
            
            return (
                <ComponentToWrap  data = {dataRetrievalFunc(dataParam)} {...this.props} {...passedProps} />
            );
        }
    }
}