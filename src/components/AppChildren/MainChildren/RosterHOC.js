import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc, props2) {
    const onItemAdd = props2.onItemAdd;

    


    return class extends React.Component {
        constructor(props) {
            super(props);
           

        }

        render() {
            // return <ComponentToWrap data={dataRetrievalFunc(parseInt(this.props.match.params.number, 10))}  />;
            //return <ComponentToWrap {...this.props} onItemAdd = {onItemAdd} data={dataRetrievalFunc(parseInt(this.props.match.params.number, 10))}  />;
            return <ComponentToWrap {...this.props} {...props2}  />;
        }
    }
}
