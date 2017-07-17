import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AutoLinkText from 'react-autolink-text2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <AutoLinkText text={this.state.text} /><br />
        <textarea value={this.state.text} onChange={this._onTextChange.bind(this)} />
      </div>
    );
  }
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);
ReactDOM.render(<App />, rootDiv);
