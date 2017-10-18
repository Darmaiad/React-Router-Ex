import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc, props2) {
    console.log("Props from HOC func");
    console.log(props2);
    const onItemAdd = props2.onItemAdd;

    return class extends React.Component {
        constructor(props) {
            super(props);
            

           
            //console.log(onItemAdd);

            //this.props = Object.assign(this.props, onItemAdd );
            console.log("Props from returned component");
            console.log(this.props);


        }

       
        render() {
            
            // return <ComponentToWrap data={dataRetrievalFunc(parseInt(this.props.match.params.number, 10))}  />;
            return <ComponentToWrap {...this.props} onItemAdd = {onItemAdd} data={dataRetrievalFunc(parseInt(this.props.match.params.number, 10))}  />;
        }
    }
}
