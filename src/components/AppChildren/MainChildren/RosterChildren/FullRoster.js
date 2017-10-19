import React from 'react';
import NewItem from './../NewItem';

//const FullRoster = (props) => {

class FullRoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      players: this.props.players
    };
      console.log("Full roster props")
      console.log(this.props);
  }

  handleClickFromChild = () => {
    // console.log("Full roster state")
    // console.log(this.state);
    this.props.onItemAdd(this.state.value);
  }

  handleChangeFromChild = (v) => {
    //console.log(v);
    this.setState({value: v});
  }

  render() {
    return (
      <div>
        <NewItem
          onClick={this.handleClickFromChild}
          onChange={this.handleChangeFromChild}
        />
        <ul>
        {this.props.players}
        </ul>
        {/* <ul key={}>
          {this.props.players}
        </ul> */}
      </div>
    );
  };

}

export default FullRoster;