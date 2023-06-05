import React from 'react';


export default class Mount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times already`;

  }

  render() {
    return(
      <div>
      <p>you have clicked {this.state.count} times already</p>
      <button onClick={() => this.setState({ count: this.state.count + 100 })}>
        Click
      </button>
    </div>
    )
  }
}
