import React from 'react';

export default function RosterHOC(ComponentToWrap, dataRetrievalFunc, props2) {
    const onItemAdd = props2.onItemAdd;

    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {

          //  console.log(this.props);
          if (props2.players.get('id-' + this.props.match.params.number) != null)
          {
            console.log(props2.players.get('id-' + this.props.match.params.number).name);
            console.log('id-' + this.props.match.params.number)
          }
           

            // return <ComponentToWrap data={dataRetrievalFunc(parseInt(this.props.match.params.number, 10))}  />;
            //return <ComponentToWrap {...this.props} onItemAdd = {onItemAdd} data={dataRetrievalFunc(parseInt(this.props.match.params.number, 10))}  />;

            //return <ComponentToWrap  data = {dataRetrievalFunc('id-' + this.props.match.params.number) }  />;
            return <ComponentToWrap  data = {{klein: "mein"}}  />;
        }
    }
}
