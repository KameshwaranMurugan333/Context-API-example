import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const ContextEx = React.createContext();

class P extends React.Component {
  render() {
    return <C />;
  }
}

class C extends React.Component {
  render() {
    return (
      <div>
        <ContextEx.Consumer>
          {context => (
            <div>
              <p>{context.a}</p>
              <p>{context.b}</p>
              <p>{context.c}</p>
            </div>
          )}
        </ContextEx.Consumer>
        <C1 />
        <C2 />
      </div>
    );
  }
}

class C1 extends React.Component {
  render() {
    return (
      <ContextEx.Consumer>
        {context => (
          <div
            onClick={() => {
              context.updatea(5);
            }}
          >
            Click Me to change a to 5
          </div>
        )}
      </ContextEx.Consumer>
    );
  }
}

class C2 extends React.Component {
  render() {
    return (
      <ContextEx.Consumer>
        {context => (
          <div
            onClick={() => {
              context.updatea(10);
            }}
          >
            Click Me to change a to 10
          </div>
        )}
      </ContextEx.Consumer>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 1,
      c: 1,
      updatea: this.updatea
    };
  }

  updatea = a => {
    this.setState({
      a: a
    });
  };

  render() {
    return (
      <ContextEx.Provider value={this.state}>
        <P />
      </ContextEx.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
