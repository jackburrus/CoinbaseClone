import React, { Component, createContext } from 'react';

// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext();


class ConfigProvider extends Component {
  

  render() {
    return (
      <Provider
        value={{
          data: this.props.data,
          newsData: this.props.newsData
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };

// I make this default since it will probably be exported most often.
export default Consumer;
