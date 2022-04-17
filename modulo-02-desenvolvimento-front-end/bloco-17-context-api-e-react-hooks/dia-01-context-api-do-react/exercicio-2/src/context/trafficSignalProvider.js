import React from "react";
import trafficSignalContext from "./trafficSignalContext";

class TrafficSignalProvider extends React.Component {
  constructor(){
    super();

    this.state = {
      signalColor: 'red'
    }
  }

  changeSignal = (signalColor) => this.setState({signalColor})

  render(){
    const {Provider} = trafficSignalContext;
    const {children} = this.props;
    return (
        <Provider value={{...this.state, changeSignal: this.changeSignal}}>
          {children}
        </Provider>
    )
  }
}

export default TrafficSignalProvider;
