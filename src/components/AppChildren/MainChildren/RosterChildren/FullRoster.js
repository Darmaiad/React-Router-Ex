import React from 'react';
import NewItem from './../NewItem';
import { Link } from 'react-router-dom';

class FullRoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      roster: ''
    };


  }

  componentDidMount() {
    // const players = this.props.players.map(p => (
    //   <li key={p.number}>
    //     <Link to={`/roster/${p.number}`}>{p.name}</Link>
    //   </li>
    // ));

    //this.setState({ roster: players });
  }

  handleSubmitFromChild = (e) => {
    this.props.onItemAdd(this.state.value);
  }

  handleChangeFromChild = (v) => {
    this.setState({ value: v });
  }

  handleDelete = (v) => {
    this.props.onDeletePlayer(v)
  }

  render() {
    return (
      <div>
        <NewItem
          onSubmit={this.handleSubmitFromChild}
          onChange={this.handleChangeFromChild}
        />
        <ul>
          {[...this.props.players.values()].map(player => (
            <li key={player.number}>
              <Link to={`/roster/${player.number}`}>{player.name}</Link>
              <button onClick={() => this.handleDelete(player.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

}

export default FullRoster;
