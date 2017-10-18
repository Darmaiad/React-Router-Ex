import React from 'react';
import NewItem from './../NewItem';

//const FullRoster = (props) => {

class FullRoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    //console.log(props);
  }

  handleClickFromChild = () => {
    alert("form submitted");
    //console.log(this.props);
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
        {this.props.players2}
        </ul>
        {/* <ul key={}>
          {this.props.players}
        </ul> */}
      </div>
    );
  };

}

export default FullRoster;